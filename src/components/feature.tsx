import type { ReactNode } from "react";
import {
  ZapIcon,
  ShieldCheckIcon,
  HeadphonesIcon,
  NetworkIcon,
  CheckIcon,
} from "lucide-react";

const secondaryFeatures = [
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
  {
    icon: <NetworkIcon className="h-5 w-5 text-brand" aria-hidden="true" />,
    title: "Infrastruktur Siap Masa Depan",
    description:
      "Jaringan fiber optik dengan perangkat kelas enterprise untuk memastikan koneksi jangka panjang yang konsisten.",
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
            </div>
            <ul className="space-y-2.5 pt-6 border-t border-gray-100 dark:border-neutral-800 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2.5">
                <CheckIcon className="h-4 w-4 text-brand shrink-0" aria-hidden="true" />
                <span>Unlimited kuota tanpa FUP</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckIcon className="h-4 w-4 text-brand shrink-0" aria-hidden="true" />
                <span>Latensi rendah untuk meeting &amp; gaming</span>
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
