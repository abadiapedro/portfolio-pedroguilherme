import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState("pt");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "pt";
    i18n.changeLanguage(savedLang);
    setLang(savedLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
    setLang(newLang);
  };

  return (
    <div
      onClick={toggleLanguage}
      className="w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer relative transition-colors"
    >
      {/* Toggle */}
      <div
        className={`w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-transform ${lang === "en" ? "translate-x-6" : ""
          }`}
      ></div>

      {/* Bandeiras com tooltip */}
      <div className="absolute flex justify-between w-12 px-1 text-sm ">
        <span className="text-[13px]" title={t("languageToggle.portuguese")}>🇧🇷</span>
        <span className="text-[13px]" title={t("languageToggle.english")}>🇺🇸</span>
      </div>
    </div>
  );
}
