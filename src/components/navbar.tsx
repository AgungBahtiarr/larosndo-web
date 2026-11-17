import { useEffect, useState } from "react";
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // ignore storage errors
    }
  };

  return (
    <nav
      aria-label="Navigasi utama"
      className="sticky top-0 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-sm border-b border-gray-200/80 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a
              href="/"
              className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <img
                className="h-11 w-auto"
                src="/laroslogo.png"
                alt="PT Lare Osing Ndo"
                width={132}
                height={44}
              />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <NavItems />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
              className="inline-flex items-center justify-center min-h-11 min-w-11 rounded-md text-gray-600 dark:text-gray-300 hover:text-brand dark:hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950"
        >
          <div className="px-3 pt-2 pb-4 space-y-1">
            <NavItems mobile onNavigate={() => setIsMenuOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavItemsProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

const NavItems = ({ mobile = false, onNavigate }: NavItemsProps) => {
  const items = [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "/#features" },
    { name: "Paket", href: "/#pricing" },
    { name: "Panduan", href: "/panduan" },
    { name: "Tentang", href: "/#about" },
    { name: "Kontak", href: "/#contact" },
  ];

  return (
    <>
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={onNavigate}
          className={
            mobile
              ? "flex items-center min-h-11 px-3 py-2 rounded-md text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand hover:bg-gray-50 dark:hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              : "text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          }
        >
          {item.name}
        </a>
      ))}
    </>
  );
};

interface ThemeToggleProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center min-h-11 min-w-11 md:min-h-9 md:min-w-9 text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      aria-label={`Ganti ke mode ${theme === "dark" ? "terang" : "gelap"}`}
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <MoonIcon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
};

export default Navbar;
