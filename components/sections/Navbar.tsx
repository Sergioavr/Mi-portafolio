"use client";

import Link from "next/link";
import { siteConfig } from "@/data";
import { useTheme } from "@/lib/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/10">
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-medium text-sm">
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6 list-none">
            <li>
              <Link href="#about" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </nav>
    </header>
  );
}