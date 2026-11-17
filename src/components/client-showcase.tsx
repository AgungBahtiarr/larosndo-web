import type { ReactNode } from "react";

interface ClientShowcaseProps {
  title: string;
  children: ReactNode;
}

const ClientShowcase = ({ title, children }: ClientShowcaseProps) => {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white mb-10 text-balance">
          {title}
        </h2>
        <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee items-center">
            <div className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 shrink-0">
              {children}
            </div>
            <div
              aria-hidden="true"
              className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 shrink-0 motion-reduce:hidden"
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
