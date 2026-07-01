"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const dark = stored ? stored === "dark" : prefersDark;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  if (!mounted) {
    return <span className="h-9 w-9" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      aria-pressed={isDark}
      className="group flex h-9 w-9 items-center justify-center rounded-full border border-graphite/20 transition-colors duration-500 hover:border-champagne-deep dark:border-paper/20 dark:hover:border-champagne"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        className="text-graphite transition-colors duration-500 group-hover:text-champagne-deep dark:text-paper dark:group-hover:text-champagne"
      >
        {isDark ? (
          <path
            d="M7.5 1V2.2M7.5 12.8V14M14 7.5H12.8M2.2 7.5H1M12.1 12.1L11.2 11.2M3.8 3.8L2.9 2.9M12.1 2.9L11.2 3.8M3.8 11.2L2.9 12.1M10.5 7.5C10.5 9.157 9.157 10.5 7.5 10.5C5.843 10.5 4.5 9.157 4.5 7.5C4.5 5.843 5.843 4.5 7.5 4.5C9.157 4.5 10.5 5.843 10.5 7.5Z"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M13 8.5C12.3 8.8 11.5 9 10.7 9C7.4 9 4.7 6.3 4.7 3C4.7 2.2 4.9 1.4 5.2 0.7C2.6 1.6 0.7 4.1 0.7 7C0.7 10.6 3.6 13.5 7.2 13.5C10.1 13.5 12.4 11.6 13.3 9C13.2 8.8 13.1 8.7 13 8.5Z"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}
