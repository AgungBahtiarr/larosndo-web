import type { ReactNode } from "react";
import { ArrowRightIcon, MessageCircleIcon } from "lucide-react";

interface HeroSectionProps {
  children?: ReactNode;
}

const HeroSection = ({ children }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-neutral-950 py-16 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-slate-200/70 dark:bg-grid-neutral-800/50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {children && <div className="mb-6">{children}</div>}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-gray-900 dark:text-white mb-5">
          Internet Fiber Optik Cepat &amp; Stabil di Banyuwangi
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8 text-balance">
          Koneksi andal 24/7 tanpa batas kuota untuk rumah, lembaga pendidikan,
          dan bisnis Anda.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-11 bg-brand hover:bg-brand-hover text-brand-foreground font-semibold py-3 px-7 rounded-full text-base transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Lihat Paket Internet
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/6282141623298?text=Halo%20Laros%20Net,%20saya%20ingin%20tanya%20ketersediaan%20jaringan%20internet."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-11 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white border border-gray-300 dark:border-neutral-800 hover:border-brand dark:hover:border-brand font-semibold py-3 px-7 rounded-full text-base transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <MessageCircleIcon className="h-4 w-4 text-brand" aria-hidden="true" />
            Hubungi via WhatsApp
          </a>
        </div>
        <dl className="mt-12 pt-8 border-t border-gray-200/80 dark:border-neutral-800 grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-xl">
          <div>
            <dt className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Target Uptime
            </dt>
            <dd className="text-xl sm:text-2xl font-bold tabular-nums text-gray-900 dark:text-white mt-0.5">
              99,5%
            </dd>
          </div>
          <div>
            <dt className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Klien Lembaga
            </dt>
            <dd className="text-xl sm:text-2xl font-bold tabular-nums text-gray-900 dark:text-white mt-0.5">
              20+
            </dd>
          </div>
          <div>
            <dt className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Support Lokal
            </dt>
            <dd className="text-xl sm:text-2xl font-bold tabular-nums text-gray-900 dark:text-white mt-0.5">
              24/7
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default HeroSection;
