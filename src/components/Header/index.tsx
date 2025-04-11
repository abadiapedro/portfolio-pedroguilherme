// src/components/Header/index.tsx
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0D1117] dark:bg-[#0D1117] border-b border-gray-700">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Nome ou Logo */}
        <div className="text-xl font-bold text-white">
          Pedro Guilherme
        </div>

        {/* Botão Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-gray-300 hover:text-white p-2 rounded-full transition"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </header>
  );
}
