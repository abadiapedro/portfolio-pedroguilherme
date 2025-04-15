import { useState, useEffect } from "react";
import { ThemeToggle } from "../ThemeToggle";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "../LanguageToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isHome, setIsHome] = useState<boolean>(true);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  // Agora com apenas a chave de tradução
  const menuItems = [
    { key: "about", id: "about" },
    { key: "projects", id: "projects" },
    { key: "skills", id: "skills" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsHome(window.location.pathname === "/");
    }
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollPosition = window.scrollY;
      const sections = menuItems.map((item) =>
        document.getElementById(item.id)
      );

      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop - 100;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(menuItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          <a href="/" onClick={() => handleScroll("about")}>
            Pedro Guilherme
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {isHome &&
            menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`transition-colors font-semibold ${activeSection === item.id
                  ? "text-blue-500 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  }`}
              >
                {t(`navbar.${item.key}`)}
              </button>
            ))}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          {isHome && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          )}
        </div>
      </div>

      {isOpen && isHome && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <div className="flex flex-col items-center py-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`py-2 font-semibold transition-colors ${activeSection === item.id
                  ? "text-blue-500 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  }`}
              >
                {t(`navbar.${item.key}`)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
