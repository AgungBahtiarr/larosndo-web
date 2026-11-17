import type { ReactNode } from "react";

interface ClientShowcaseProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const ClientShowcase = ({ title, subtitle, children }: ClientShowcaseProps) => {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2.5 text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          )}
        </div>
        <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee items-center">
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
