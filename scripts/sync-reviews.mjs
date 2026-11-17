import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const MAPS_URL =
  process.env.GOOGLE_MAPS_URL || "https://maps.app.goo.gl/ukvqhq9zA2VT2M48A";
const OUTPUT_PATH = resolve(process.cwd(), "src/data/reviews.json");
const AVATARS_DIR = resolve(process.cwd(), "public/reviews");
const MAX_REVIEWS = Number(process.env.MAX_REVIEWS || 20);

function getInitials(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return "LN";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

async function main() {
  console.log(`Opening Google Maps: ${MAPS_URL}`);
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    locale: "id-ID",
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    viewport: { width: 1280, height: 900 },
  });

  const page = await context.newPage();

  try {
    await page.goto(MAPS_URL, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForSelector("h1", { timeout: 20000 });
    await page.waitForTimeout(2000);

    // Handle Google consent dialog if shown
    const acceptBtn = page
      .locator('button:has-text("Accept all"), button:has-text("Terima semua")')
      .first();
    if (await acceptBtn.isVisible().catch(() => false)) {
      await acceptBtn.click();
      await page.waitForTimeout(1500);
    }

    const placeName =
      (await page.locator("h1").first().textContent().catch(() => ""))?.trim() ||
      "Lare Osing Ndo";

    // Extract overall rating and total review count from header
    const summary = await page.evaluate(() => {
      const ratingEl = document.querySelector('div.F7nice span[aria-hidden="true"]');
      const countEl = document.querySelector('div.F7nice span[aria-label*="ulasan"], div.F7nice span[aria-label*="review"]');
      const rawRating = ratingEl?.textContent?.trim()?.replace(",", ".") || "";
      const rawCount = countEl?.textContent?.replace(/[^\d]/g, "") || "";
      return {
        rating: rawRating ? Number.parseFloat(rawRating) : null,
        totalReviews: rawCount ? Number.parseInt(rawCount, 10) : null,
      };
    });

    // Click Reviews / Ulasan tab
    const reviewsTab = page
      .locator('button[role="tab"]')
      .filter({ hasText: /Ulasan|Reviews/i })
      .first();

    if (await reviewsTab.isVisible().catch(() => false)) {
      await reviewsTab.click();
      await page.waitForTimeout(2500);
    }

    // Scroll the reviews list by hovering over the review pane and wheeling down
    const firstCard = page.locator("div.jftiEf").first();
    const box = await firstCard.boundingBox().catch(() => null);
    if (box) {
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    }
    let prevCount = 0;
    for (let i = 0; i < 12; i++) {
      const cards = page.locator("div.jftiEf");
      const count = await cards.count().catch(() => 0);
      if (count >= MAX_REVIEWS) break;
      await page.mouse.wheel(0, 2200);
      await page.waitForTimeout(1100);
      const nextCount = await cards.count().catch(() => 0);
      if (i > 2 && nextCount === prevCount) break;
      prevCount = nextCount;
    }

    // Expand "Lainnya" / "More" buttons inside reviews
    const moreButtons = page.locator(
      'button.w8nwRe.kyuRq, button[aria-label*="Lainnya"], button[aria-label*="More"]'
    );
    const moreCount = await moreButtons.count().catch(() => 0);
    for (let i = 0; i < Math.min(moreCount, 20); i++) {
      await moreButtons.nth(i).click().catch(() => {});
    }
    await page.waitForTimeout(500);

    const rawReviews = await page.evaluate((limit) => {
      const cards = Array.from(document.querySelectorAll("div.jftiEf"));
      const seen = new Set();
      const results = [];

      for (const card of cards) {
        const name =
          card.querySelector("div.d4r55")?.textContent?.trim() || "";
        const content =
          card.querySelector("span.wiI7pd")?.textContent?.trim() || "";
        const date =
          card.querySelector("span.rsqaWe")?.textContent?.trim() || "";
        const starAria =
          card.querySelector("span.kvMYJc")?.getAttribute("aria-label") || "";
        const starMatch = starAria.match(/(\d+)/);
        const rating = starMatch ? Number.parseInt(starMatch[1], 10) : 5;
        const avatarUrl =
          card.querySelector("img.NBa7we")?.getAttribute("src") || "";

        if (!name || !content) continue;
        const key = `${name}::${content.slice(0, 40)}`;
        if (seen.has(key)) continue;
        seen.add(key);

        results.push({ name, rating, date, content, avatarUrl });
        if (results.length >= limit) break;
      }

      return results;
    }, MAX_REVIEWS);

    mkdirSync(AVATARS_DIR, { recursive: true });

    const reviews = await Promise.all(
      rawReviews.map(async (r, index) => {
        let avatar = null;
        if (r.avatarUrl && r.avatarUrl.startsWith("http")) {
          try {
            const res = await fetch(r.avatarUrl);
            if (res.ok) {
              const buf = Buffer.from(await res.arrayBuffer());
              const filename = `reviewer-${index + 1}.jpg`;
              writeFileSync(resolve(AVATARS_DIR, filename), buf);
              avatar = `/reviews/${filename}`;
            }
          } catch {
            // fallback to initials
          }
        }
        return {
          name: r.name,
          rating: r.rating,
          date: r.date,
          content: r.content,
          initials: getInitials(r.name),
          avatar,
        };
      })
    );

    const payload = {
      placeName,
      placeUrl: MAPS_URL,
      rating: summary.rating ?? 5.0,
      totalReviews: summary.totalReviews ?? reviews.length,
      updatedAt: new Date().toISOString(),
      reviews,
    };

    mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
    writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2) + "\n", "utf8");

    console.log(
      `Synced ${reviews.length} reviews for "${placeName}" (rating: ${payload.rating}, total: ${payload.totalReviews}) -> ${OUTPUT_PATH}`
    );
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error("Failed to sync Google Maps reviews:", err);
  process.exit(1);
});
