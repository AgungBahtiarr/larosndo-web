import type { ReactNode } from "react";
import {
  WifiIcon,
  ShieldCheckIcon,
  HeadphonesIcon,
  RocketIcon,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <WifiIcon className="h-6 w-6" aria-hidden="true" />,
      title: "Internet Berkecepatan Tinggi",
      description:
        "Koneksi fiber optik rendah latensi untuk streaming, kerja jarak jauh, dan operasional bisnis tanpa hambatan.",
    },
    {
      icon: <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />,
      title: "Keamanan Jaringan Terjaga",
      description:
        "Perlindungan jaringan berlapis untuk menjaga stabilitas dan keamanan aktivitas digital Anda.",
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" aria-hidden="true" />,
      title: "Dukungan Teknis 24/7",
      description:
        "Tim teknisi lokal Banyuwangi selalu siap membantu kapan saja saat Anda membutuhkan penanganan cepat.",
    },
    {
      icon: <RocketIcon className="h-6 w-6" aria-hidden="true" />,
      title: "Infrastruktur Siap Masa Depan",
      description:
        "Jaringan terus diperbarui dengan perangkat kelas enterprise untuk keandalan koneksi jangka panjang.",
    },
  ];

  return (
    <section id="features" className="bg-gray-50 dark:bg-neutral-900/60 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 text-balance">
            Layanan Kami
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Dirancang untuk kebutuhan rumah tangga, instansi pendidikan, dan
            perusahaan di Banyuwangi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-gray-200/80 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-orange-50 dark:bg-orange-950/50 text-brand mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default FeaturesSection;
