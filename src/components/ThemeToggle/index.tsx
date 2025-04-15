import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      // Se já foi salvo anteriormente, aplica o tema salvo
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      }
    } else {
      // Se não foi salvo, usa a preferência do sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <div
      onClick={toggleTheme}
      className="w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-colors"
    >
      <div
        className={`w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-transform ${
          isDark ? "translate-x-6" : ""
        }`}
      ></div>

      <div className="absolute flex justify-between w-12 px-1 text-sm">
        <span className="text-yellow-400">☀️</span>
        <span className="text-blue-400">🌙</span>
      </div>
    </div>
  );
}
