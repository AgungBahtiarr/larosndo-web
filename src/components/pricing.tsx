import { useState } from "react";
import { CheckIcon } from "lucide-react";

type CategoryKey = "home" | "business";

interface Plan {
  name: string;
  speed: string;
  price: string;
  period?: string;
  tagline: string;
  recommended?: boolean;
  features: string[];
}

const PricingSection = () => {
  const [category, setCategory] = useState<CategoryKey>("home");

  const plansByCategory: Record<CategoryKey, Plan[]> = {
    home: [
      {
        name: "Basic",
        speed: "15 Mbps",
        price: "Rp 100.000",
        period: "/bulan",
        tagline: "Ideal untuk penggunaan rumah & belajar online.",
        features: [
          "Kecepatan unduh hingga 15 Mbps",
          "Kuota unlimited tanpa FUP",
          "Fitur keamanan jaringan dasar",
          "Dukungan pelanggan 24/7",
        ],
      },
      {
        name: "Pro",
        speed: "25 Mbps",
        price: "Rp 150.000",
        period: "/bulan",
        tagline: "Pilihan terbaik untuk keluarga & kerja remote.",
        recommended: true,
        features: [
          "Kecepatan unduh hingga 25 Mbps",
          "Kuota unlimited tanpa FUP",
          "Proteksi keamanan jaringan lanjutan",
          "Dukungan prioritas 24/7",
          "Gratis sewa modem",
        ],
      },
      {
        name: "Premium",
        speed: "50 Mbps",
        price: "Rp 200.000",
        period: "/bulan",
        tagline: "Performa maksimal untuk rumah pintar & kreator.",
        features: [
          "Kecepatan unduh hingga 50 Mbps",
          "Kuota unlimited tanpa FUP",
          "Proteksi keamanan jaringan lanjutan",
          "Dukungan VIP 24/7",
          "Gratis sewa modem & router",
          "Alamat IP Statis",
        ],
      },
    ],
    business: [
      {
        name: "Bisnis Lite",
        speed: "100 Mbps",
        price: "Rp 750.000",
        period: "/bulan",
        tagline: "Koneksi stabil untuk kantor, ruko, dan UMKM.",
        features: [
          "Bandwidth simetris 100 Mbps",
          "Kuota unlimited tanpa FUP",
          "1 Alamat IP Publik Statis",
          "Dukungan teknis prioritas 24/7",
        ],
      },
      {
        name: "Bisnis Pro",
        speed: "300 Mbps",
        price: "Rp 1.500.000",
        period: "/bulan",
        tagline: "Andalan sekolah, klinik, dan perusahaan menengah.",
        recommended: true,
        features: [
          "Bandwidth dedicated 300 Mbps",
          "Target SLA uptime 99,5%",
          "IP Publik Statis + monitoring proaktif",
          "Penanganan teknisi on-site cepat",
          "Gratis perangkat router enterprise",
        ],
      },
      {
        name: "Enterprise",
        speed: "1 Gbps+",
        price: "Custom",
        tagline: "Solusi khusus kampus, hotel, dan instansi besar.",
        features: [
          "Kapasitas dedicated 1 Gbps ke atas",
          "Jalur backup fiber ganda (redundancy)",
          "SLA khusus & account manager",
          "Dukungan NOC 24/7",
          "Konfigurasi BGP / VLAN sesuai kebutuhan",
        ],
      },
    ],
  };

  const activePlans = plansByCategory[category];

  return (
    <section id="pricing" className="bg-white dark:bg-neutral-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 text-balance">
            Pilih Paket Internet Anda
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Pilih kategori layanan sesuai kebutuhan dan cek ketersediaan area
            langsung dengan tim kami.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div
            role="tablist"
            aria-label="Kategori paket internet"
            className="inline-flex p-1 rounded-full bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800"
          >
            <button
              type="button"
              role="tab"
              id="tab-home"
              aria-selected={category === "home"}
              aria-controls="panel-pricing"
              onClick={() => setCategory("home")}
              className={`min-h-10 px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                category === "home"
                  ? "bg-brand text-brand-foreground shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Paket Rumah
            </button>
            <button
              type="button"
              role="tab"
              id="tab-business"
              aria-selected={category === "business"}
              aria-controls="panel-pricing"
              onClick={() => setCategory("business")}
              className={`min-h-10 px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                category === "business"
                  ? "bg-brand text-brand-foreground shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Bisnis &amp; Sekolah
            </button>
          </div>
        </div>

        <div
          id="panel-pricing"
          role="tabpanel"
          aria-labelledby={category === "home" ? "tab-home" : "tab-business"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {activePlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} category={category} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          *Semua paket tanpa FUP dan gratis survei lokasi. Tersedia juga layanan
          Internet Dedicated, IP Transit BGP, Metro-E, dan Managed Service untuk
          bisnis maupun instansi di Banyuwangi.
        </p>
      </div>
    </section>
  );
};

const PricingCard = ({
  plan,
  category,
}: {
  plan: Plan;
  category: CategoryKey;
}) => {
  const categoryLabel = category === "home" ? "Rumah" : "Bisnis & Sekolah";
  const whatsappText = encodeURIComponent(
    `Halo Laros Net, saya tertarik paket ${categoryLabel} - ${plan.name} (${plan.speed}). Mohon info detail tarif dan ketersediaan area.`,
  );

  return (
    <div
      className={`rounded-xl overflow-hidden flex flex-col h-full transition-[border-color,box-shadow] duration-200 ${
        plan.recommended
          ? "bg-white dark:bg-neutral-900 border-2 border-brand shadow-lg"
          : "bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-sm hover:shadow-md"
      }`}
    >
      <div className="p-6 sm:p-7 flex-grow">
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {plan.name}
          </h3>
          {plan.recommended && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 dark:bg-orange-950/60 text-brand">
              Populer
            </span>
          )}
        </div>
        <p className="text-sm font-semibold text-brand tabular-nums mb-3">
          Kecepatan hingga {plan.speed}
        </p>
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-3xl font-bold tracking-tight tabular-nums text-gray-900 dark:text-white">
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {plan.period}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          {plan.tagline}
        </p>
        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300"
            >
              <CheckIcon
                className="h-4 w-4 text-brand shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-gray-50 dark:bg-neutral-900/80 border-t border-gray-100 dark:border-neutral-800 mt-auto">
        <a
          href={`https://wa.me/6282141623298?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center w-full min-h-11 font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
            plan.recommended
              ? "bg-brand hover:bg-brand-hover text-brand-foreground"
              : "bg-gray-900 hover:bg-gray-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white"
          }`}
        >
          Pilih Paket {plan.name}
        </a>
      </div>
    </div>
  );
};

export default PricingSection;
