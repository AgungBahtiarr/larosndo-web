import type { ReactNode } from "react";
import {
  ZapIcon,
  ShieldCheckIcon,
  HeadphonesIcon,
  NetworkIcon,
  GitBranchIcon,
  CheckIcon,
} from "lucide-react";

const secondaryFeatures = [
  {
    icon: <GitBranchIcon className="h-5 w-5 text-brand" aria-hidden="true" />,
    title: "Multi-Link Backbone & Jalur Backup",
    description:
      "Didukung banyak jalur backbone dan multi-upstream dengan failover otomatis sehingga koneksi tetap aktif tanpa putus meski salah satu jalur mengalami gangguan.",
  },
  {
    icon: <NetworkIcon className="h-5 w-5 text-brand" aria-hidden="true" />,
    title: "Low Latency Gaming & Rute IXP Langsung",
    description:
      "Terhubung langsung ke 7+ IXP nasional & internasional (IIX, DE-CIX, OpenIXP) untuk ping rendah, minim jitter, dan stabil saat bermain game online maupun konferensi video.",
  },
  {
    icon: <ShieldCheckIcon className="h-5 w-5 text-brand" aria-hidden="true" />,
    title: "Keamanan Jaringan Terjaga",
    description:
      "Perlindungan jaringan berlapis untuk menjaga stabilitas dan keamanan aktivitas digital rumah, sekolah, hingga kantor.",
  },
  {
    icon: <HeadphonesIcon className="h-5 w-5 text-brand" aria-hidden="true" />,
    title: "Dukungan Teknis Lokal 24/7",
    description:
      "Tim teknisi berbasis di Banyuwangi yang siap membantu via WhatsApp dan turun langsung ke lapangan saat dibutuhkan.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-gray-50 dark:bg-neutral-900/60 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
            Layanan Kami
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Dirancang untuk kebutuhan rumah tangga, instansi pendidikan, dan
            perusahaan di Banyuwangi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-gray-200/90 dark:border-neutral-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-brand/10 mb-6">
                <ZapIcon className="h-6 w-6 text-brand" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Internet Fiber Berkecepatan Tinggi
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                Koneksi fiber optik murni sampai ke lokasi untuk streaming 4K,
                kerja jarak jauh, ujian sekolah, dan operasional bisnis tanpa
                hambatan.
              </p>

              <div
                aria-hidden="true"
                className="mb-6 rounded-xl border border-gray-200/90 dark:border-neutral-800 bg-gray-50/70 dark:bg-neutral-950/70 p-4"
              >
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="inline-flex items-center gap-2 font-medium text-gray-700 dark:text-gray-200">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Multi-Link Backbone
                  </span>
                  <span className="rounded-md bg-brand/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-brand">
                    Auto-Failover
                  </span>
                </div>

                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
                  {/* Left Node: IXP / Upstream */}
                  <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2.5 shadow-xs">
                    <NetworkIcon className="h-4 w-4 text-brand mb-1" />
                    <span className="text-[11px] font-semibold text-gray-900 dark:text-white leading-none">
                      IXP Core
                    </span>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 leading-none">
                      7+ Upstream
                    </span>
                  </div>

                  {/* Center: Dual Optical Fiber Paths */}
                  <div className="flex flex-col gap-3 py-1">
                    {/* Primary Link */}
                    <div>
                      <div className="flex items-center justify-between text-[10px] mb-1">
                        <span className="font-medium text-gray-600 dark:text-gray-300">
                          Jalur Utama
                        </span>
                        <span className="font-mono text-brand font-medium">Aktif</span>
                      </div>
                      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-800">
                        <div className="animate-beam absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-transparent via-brand to-transparent" />
                      </div>
                    </div>

                    {/* Backup Link */}
                    <div>
                      <div className="flex items-center justify-between text-[10px] mb-1">
                        <span className="font-medium text-gray-600 dark:text-gray-300">
                          Jalur Backup
                        </span>
                        <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                          Siaga
                        </span>
                      </div>
                      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-800">
                        <div className="animate-beam-slow absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Right Node: Customer */}
                  <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2.5 shadow-xs">
                    <ZapIcon className="h-4 w-4 text-emerald-500 mb-1" />
                    <span className="text-[11px] font-semibold text-gray-900 dark:text-white leading-none">
                      Lokasi Anda
                    </span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1 leading-none">
                      Stabil
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ul className="space-y-2.5 pt-6 border-t border-gray-100 dark:border-neutral-800 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2.5">
                <CheckIcon className="h-4 w-4 text-brand shrink-0" aria-hidden="true" />
                <span>Unlimited kuota tanpa FUP</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckIcon className="h-4 w-4 text-brand shrink-0" aria-hidden="true" />
                <span>Low latency gaming — ping rendah &amp; minim packet loss</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckIcon className="h-4 w-4 text-brand shrink-0" aria-hidden="true" />
                <span>Multi-link backbone dengan jalur backup otomatis</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckIcon className="h-4 w-4 text-brand shrink-0" aria-hidden="true" />
                <span>Opsi IP Static untuk kebutuhan bisnis</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 bg-white dark:bg-neutral-900 rounded-2xl border border-gray-200/90 dark:border-neutral-800 shadow-sm divide-y divide-gray-100 dark:divide-neutral-800 flex flex-col justify-center">
            {secondaryFeatures.map((item) => (
              <FeatureRow
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureRowProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureRow = ({ icon, title, description }: FeatureRowProps) => {
  return (
    <div className="p-6 sm:p-7 flex items-start gap-4">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1.5">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeaturesSection;
