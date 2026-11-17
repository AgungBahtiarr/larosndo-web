import { useState } from "react";
import { MapPinIcon, SearchIcon, ArrowRightIcon } from "lucide-react";

const districts = [
  "Banyuwangi Kota",
  "Rogojampi",
  "Glagah",
  "Giri",
  "Kabat",
  "Cluring",
  "Genteng",
  "Srono",
  "Muncar",
  "Singojuruh",
  "Kalipuro",
  "Songgon",
];

const CoverageSection = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string>("Rogojampi");

  const filtered = districts.filter((d) =>
    d.toLowerCase().includes(query.trim().toLowerCase()),
  );

  const activeDistrict = selected || query.trim() || "Banyuwangi";
  const whatsappUrl = `https://wa.me/6282141623298?text=${encodeURIComponent(
    `Halo PT Lare Osing Ndo, saya mau cek ketersediaan jaringan fiber optik di wilayah ${activeDistrict}.`,
  )}`;

  return (
    <section id="coverage" className="py-20 bg-gray-50 dark:bg-neutral-900/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 text-balance">
            Cek Jangkauan Wilayah Banyuwangi
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Pilih kecamatan Anda untuk memastikan ketersediaan titik ODP fiber
            optik terdekat.
          </p>
        </div>

        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <label htmlFor="district-search" className="sr-only">
              Cari kecamatan di Banyuwangi
            </label>
            <div className="relative">
              <SearchIcon
                className="h-5 w-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="district-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari kecamatan (misal: Rogojampi, Genteng, Glagah)..."
                className="w-full min-h-11 pl-11 pr-4 py-2.5 rounded-md border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-gray-900 dark:text-white placeholder:text-gray-400 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              />
            </div>
          </div>

          {filtered.length > 0 ? (
            <div
              role="group"
              aria-label="Daftar kecamatan terjangkau"
              className="flex flex-wrap gap-2.5 mb-8"
            >
              {filtered.map((district) => {
                const isSelected = selected === district;
                return (
                  <button
                    key={district}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelected(district)}
                    className={`inline-flex items-center gap-1.5 min-h-10 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                      isSelected
                        ? "bg-brand text-brand-foreground"
                        : "bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-neutral-700"
                    }`}
                  >
                    <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    {district}
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-8">
              Kecamatan &ldquo;{query}&rdquo; belum tercantum di daftar cepat.
              Anda tetap dapat menanyakannya langsung kepada tim kami karena
              jaringan terus diperluas.
            </p>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-neutral-800">
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Wilayah dipilih: {activeDistrict}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                Tim teknis kami akan mengecek jarak tiang ODP ke alamat Anda
                secara gratis.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`/jangkauan/${activeDistrict
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="inline-flex items-center justify-center min-h-11 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-neutral-700 text-gray-800 dark:text-gray-200 hover:border-brand hover:text-brand text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                Info Area {activeDistrict}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-11 px-5 py-2.5 rounded-lg bg-brand hover:bg-brand-hover text-brand-foreground text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Cek Titik di {activeDistrict}
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
