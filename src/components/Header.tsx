import { useState } from 'react';
import { useLanguage } from '../i18n';

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-cream/80 backdrop-blur-md border-b-[2.5px] border-beige">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-5 sm:px-8">
        <a
          href="#"
          className="font-outfit font-extrabold text-xl text-primary-dark tracking-tight"
        >
          DW<span className="text-primary">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-outfit font-medium text-muted hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2.5px] after:bg-primary after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border-[2.5px] border-beige hover:border-primary-light bg-white text-sm font-outfit font-semibold transition-all duration-200 hover:shadow-cartoon"
            aria-label="Toggle language"
          >
            {language === 'en' ? (
              <>
                <span>🇧🇷</span>
                <span className="text-dark">PT</span>
              </>
            ) : (
              <>
                <span>🇺🇸</span>
                <span className="text-dark">EN</span>
              </>
            )}
          </button>

          <button
            className="md:hidden text-dark p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6L18 18" />
                </>
              ) : (
                <>
                  <path d="M3 7h18" />
                  <path d="M3 12h18" />
                  <path d="M3 17h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-t-[2.5px] border-beige px-6 py-5 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-outfit font-medium text-muted hover:text-primary hover:bg-primary-50 px-4 py-2.5 rounded-xl transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}