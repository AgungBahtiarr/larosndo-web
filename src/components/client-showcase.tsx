import { useState, type ReactNode } from "react";
import { PauseIcon, PlayIcon } from "lucide-react";

interface ClientShowcaseProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const ClientShowcase = ({ title, subtitle, children }: ClientShowcaseProps) => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-neutral-900/60 border-y border-gray-200/70 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="text-center sm:text-left max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2.5 text-balance">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {subtitle}
              </p>
            )}
          </div>
          <button
            type="button"
            aria-pressed={paused}
            onClick={() => setPaused((p) => !p)}
            className="inline-flex items-center justify-center gap-1.5 self-center sm:self-auto min-h-[44px] px-3.5 py-2 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand shrink-0"
          >
            {paused ? (
              <>
                <PlayIcon className="w-3.5 h-3.5" aria-hidden="true" />
                Putar
              </>
            ) : (
              <>
                <PauseIcon className="w-3.5 h-3.5" aria-hidden="true" />
                Jeda
              </>
            )}
          </button>
        </div>
        <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div
            className="animate-marquee items-center hover:[animation-play-state:paused] motion-reduce:animate-none"
            style={{ animationPlayState: paused ? "paused" : "running" }}
          >
            <div className="flex items-center gap-6 pr-6 shrink-0">
              {children}
            </div>
            <div
              aria-hidden="true"
              className="flex items-center gap-6 pr-6 shrink-0 motion-reduce:hidden"
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
