import { useState } from "react";

export type ClientCategory = "all" | "instansi" | "sekolah" | "bisnis";

export interface ClientLogo {
  name: string;
  logo: string;
  category: Exclude<ClientCategory, "all">;
}

interface ClientGridProps {
  title: string;
  subtitle?: string;
  logos: ClientLogo[];
}

const categories: { key: ClientCategory; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "instansi", label: "Instansi & Kampus" },
  { key: "sekolah", label: "Sekolah" },
  { key: "bisnis", label: "Bisnis & ISP" },
];

const ClientGrid = ({ title, subtitle, logos }: ClientGridProps) => {
  const [active, setActive] = useState<ClientCategory>("all");
  const [showAllMobile, setShowAllMobile] = useState(false);

  const filtered =
    active === "all"
      ? logos
      : logos.filter((item) => item.category === active);

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2.5 text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          )}
        </div>

        <div
          role="tablist"
          aria-label="Filter kategori klien"
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => {
            const isSelected = active === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActive(cat.key)}
                className={`min-h-10 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  isSelected
                    ? "bg-brand text-brand-foreground shadow-sm"
                    : "bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-800"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {filtered.map((item, idx) => (
            <div
              key={item.name}
              title={item.name}
              className={`bg-white dark:bg-neutral-100 rounded-xl border border-gray-200/90 dark:border-neutral-800 p-3 h-24 items-center justify-center shadow-sm hover:border-brand/50 transition-colors duration-150 overflow-hidden ${
                active === "all" && !showAllMobile && idx >= 12
                  ? "hidden sm:flex"
                  : "flex"
              }`}
            >
              <img
                src={item.logo}
                alt={`Logo ${item.name}`}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {active === "all" && filtered.length > 12 && (
          <div className="mt-6 flex justify-center sm:hidden">
            <button
              type="button"
              onClick={() => setShowAllMobile((v) => !v)}
              className="min-h-11 px-5 py-2.5 rounded-full text-sm font-medium border border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-200 hover:border-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {showAllMobile
                ? "Tampilkan lebih sedikit"
                : `Lihat semua (${filtered.length} mitra)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientGrid;
