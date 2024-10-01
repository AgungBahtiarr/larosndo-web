import { MenuIcon, XIcon, SunIcon, MoonIcon } from "lucide-react";

const Navbar = ({ theme, toggleTheme, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="sticky top-0 z-40 bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img className="h-12" src="laroslogo.png" alt="Laros Ae" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavItems />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 dark:text-gray-400 hover:text-[#fb923c] dark:hover:text-[#fb923c]"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItems mobile />
            <div className="pt-4">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} mobile />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItems = ({ mobile = false }) => {
  const items = [
    { name: "Home", href: "#" },
    { name: "Layanan", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Tentang", href: "#about" },
    { name: "Kontak", href: "#contact" },
  ];

  return items.map((item) => (
    <a
      key={item.name}
      href={item.href}
      className={`${
        mobile
          ? "block px-3 py-2 rounded-md text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-[#fb923c] dark:hover:text-[#fb923c] hover:bg-gray-50 dark:hover:bg-gray-700"
          : "text-gray-700 dark:text-gray-300 hover:text-[#fb923c] dark:hover:text-[#fb923c] px-3 py-2 rounded-md text-sm font-semibold"
      }`}
    >
      {item.name}
    </a>
  ));
};

const ThemeToggle = ({ theme, toggleTheme, mobile = false }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`${
        mobile
          ? "flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#fb923c] dark:hover:text-[#fb923c] hover:bg-gray-50 dark:hover:bg-gray-700"
          : "text-gray-700 dark:text-gray-300 hover:text-[#fb923c] dark:hover:text-[#fb923c] p-2 rounded-md"
      }`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
};

export default Navbar;
