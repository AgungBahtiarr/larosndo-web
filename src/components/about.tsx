import { useState, type ReactNode } from "react";
import {
  LightbulbIcon,
  UsersIcon,
  TrendingUpIcon,
  WifiIcon,
  GlobeIcon,
  RssIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type TabKey = "mission" | "team" | "future";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("mission");
  const prefersReducedMotion = useReducedMotion();

  const tabContent: Record<
    TabKey,
    { title: string; content: string; icon: ReactNode }
  > = {
    mission: {
      title: "Misi Kami",
      content:
        "Di PT Lare Osing Ndo, kami berkomitmen menjembatani kesenjangan digital dengan menghadirkan akses internet fiber optik yang cepat dan stabil hingga ke area perkotaan maupun pedesaan Banyuwangi.",
      icon: <LightbulbIcon className="h-8 w-8 text-brand shrink-0" aria-hidden="true" />,
    },
    team: {
      title: "Tim Kami",
      content:
        "Di balik layanan PT Lare Osing Ndo terdapat tim network engineer, teknisi lapangan lokal, dan layanan pelanggan yang sigap menjaga koneksi Anda tetap stabil setiap hari.",
      icon: <UsersIcon className="h-8 w-8 text-brand shrink-0" aria-hidden="true" />,
    },
    future: {
      title: "Masa Depan",
      content:
        "Kami terus memperluas jangkauan jaringan fiber optik dan memperbarui perangkat infrastruktur agar masyarakat dan bisnis di Banyuwangi siap menghadapi kebutuhan digital masa depan.",
      icon: <TrendingUpIcon className="h-8 w-8 text-brand shrink-0" aria-hidden="true" />,
    },
  };

  const tabKeys = Object.keys(tabContent) as TabKey[];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-neutral-900/60 border-y border-gray-200/70 dark:border-neutral-800 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 text-balance">
            Tentang LarosNdo
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Menghadirkan solusi internet fiber optik mutakhir di Banyuwangi sejak 2022
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="relative">
            <div
              role="img"
              aria-label="Infrastruktur server jaringan PT Lare Osing Ndo"
              className="rounded-xl py-20 px-8 bg-[url('/server.jpeg')] h-[360px] sm:h-[440px] bg-cover bg-bottom border border-gray-200 dark:border-neutral-800"
            />
            <div className="absolute bottom-4 right-4 md:-bottom-5 md:-right-5 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 px-5 py-3.5 rounded-xl shadow-lg">
              <p className="text-2xl font-bold tabular-nums text-brand">
                Sejak 2022
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Melayani Banyuwangi
              </p>
            </div>
          </div>

          <div className="lg:min-h-[440px] flex flex-col justify-between">
            <div>
              <div
                role="tablist"
              aria-label="Informasi tentang LarosNdo"
              className="flex flex-wrap gap-2 mb-6"
            >
              {tabKeys.map((tab) => {
                const isSelected = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    id={`tab-${tab}`}
                    aria-selected={isSelected}
                    aria-controls={`panel-${tab}`}
                    onClick={() => setActiveTab(tab)}
                    className={`min-h-[44px] px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                      isSelected
                        ? "bg-brand text-brand-foreground"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-neutral-900 dark:text-gray-300 dark:hover:bg-neutral-800"
                    }`}
                  >
                    {tabContent[tab].title}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeTab}
              role="tabpanel"
              id={`panel-${activeTab}`}
              aria-labelledby={`tab-${activeTab}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: "easeOut" }}
              className="bg-gray-50 dark:bg-neutral-900 border border-gray-200/80 dark:border-neutral-800 p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                {tabContent[activeTab].icon}
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {tabContent[activeTab].title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {tabContent[activeTab].content}
              </p>
            </motion.div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <FeatureItem
                icon={<WifiIcon className="h-5 w-5" aria-hidden="true" />}
                text="Fiber optik andal"
              />
              <FeatureItem
                icon={<GlobeIcon className="h-5 w-5" aria-hidden="true" />}
                text="Jangkauan terus meluas"
              />
              <FeatureItem
                icon={<RssIcon className="h-5 w-5" aria-hidden="true" />}
                text="Solusi inovatif"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, text }: { icon: ReactNode; text: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-brand mb-2">{icon}</div>
    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{text}</p>
  </div>
);

export default AboutSection;
