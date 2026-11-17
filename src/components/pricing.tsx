import { CheckIcon } from "lucide-react";

interface Plan {
  name: string;
  speed: string;
  tagline: string;
  recommended?: boolean;
  features: string[];
}

const PricingSection = () => {
  const plans: Plan[] = [
    {
      name: "Basic",
      speed: "50 Mbps",
      tagline: "Ideal untuk penggunaan rumah & belajar online.",
      features: [
        "Kecepatan unduh hingga 50 Mbps",
        "Kuota unlimited tanpa FUP",
        "Fitur keamanan jaringan dasar",
        "Dukungan pelanggan 24/7",
      ],
    },
    {
      name: "Pro",
      speed: "250 Mbps",
      tagline: "Pilihan terbaik untuk keluarga & kantor kecil.",
      recommended: true,
      features: [
        "Kecepatan unduh hingga 250 Mbps",
        "Kuota unlimited tanpa FUP",
        "Proteksi keamanan jaringan lanjutan",
        "Dukungan prioritas 24/7",
        "Gratis sewa modem",
      ],
    },
    {
      name: "Premium",
      speed: "1 Gbps",
      tagline: "Performa maksimal untuk bisnis & institusi.",
      features: [
        "Kecepatan unduh hingga 1 Gbps",
        "Kuota unlimited tanpa FUP",
        "Proteksi keamanan jaringan lanjutan",
        "Dukungan VIP 24/7",
        "Gratis sewa modem & router",
        "Alamat IP Statis",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 text-balance">
            Pilih Paket Internet Anda
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Konsultasikan kebutuhan bandwidth dan cek cakupan area langsung
            dengan tim kami.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan }: { plan: Plan }) => {
  const whatsappText = encodeURIComponent(
    `Halo Laros Net, saya tertarik berlangganan paket ${plan.name} (${plan.speed}). Mohon info tarif dan ketersediaan area.`,
  );

  return (
    <div
      className={`rounded-xl overflow-hidden flex flex-col h-full transition-[border-color,box-shadow] duration-200 ${
        plan.recommended
          ? "bg-white dark:bg-gray-800 border-2 border-brand shadow-lg"
          : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md"
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
        <p className="text-3xl font-bold tracking-tight tabular-nums text-gray-900 dark:text-white mb-2">
          {plan.speed}
        </p>
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
      <div className="p-6 bg-gray-50 dark:bg-gray-800/80 border-t border-gray-100 dark:border-gray-700/70 mt-auto">
        <a
          href={`https://wa.me/6282141623298?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center w-full min-h-11 font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
            plan.recommended
              ? "bg-brand hover:bg-brand-hover text-brand-foreground"
              : "bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white"
          }`}
        >
          Tanya Harga &amp; Pasang {plan.name}
        </a>
      </div>
    </div>
  );
};

export default PricingSection;
