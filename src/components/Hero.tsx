import { useLanguage } from '../i18n';
import {
  FloatingDecoration,
  StarShape,
  CodeBrackets,
  DotCircle,
  BlobShape,
  TriangleShape,
} from './Decorations';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 bg-cream overflow-hidden">
      <FloatingDecoration className="top-28 left-[8%] hidden sm:block" animation="animate-float-1">
        <StarShape size={28} />
      </FloatingDecoration>
      <FloatingDecoration className="top-36 right-[12%] hidden sm:block" animation="animate-float-2" delay={1}>
        <CodeBrackets size={40} />
      </FloatingDecoration>
      <FloatingDecoration className="bottom-36 left-[15%] hidden sm:block" animation="animate-float-3">
        <DotCircle size={22} color="#7C3AED" opacity={0.4} />
      </FloatingDecoration>
      <FloatingDecoration className="top-1/3 right-[6%] hidden lg:block" animation="animate-float-2" delay={2}>
        <BlobShape size={140} opacity={0.06} />
      </FloatingDecoration>
      <FloatingDecoration className="bottom-1/4 left-[6%] hidden lg:block" animation="animate-float-1" delay={3}>
        <BlobShape size={100} color="#F59E0B" opacity={0.06} />
      </FloatingDecoration>
      <FloatingDecoration className="top-48 left-[30%] hidden md:block" animation="animate-float-3" delay={1.5}>
        <TriangleShape size={18} />
      </FloatingDecoration>
      <FloatingDecoration className="bottom-48 right-[20%] hidden sm:block" animation="animate-float-1" delay={0.5}>
        <StarShape size={18} color="#F59E0B" />
      </FloatingDecoration>
      <FloatingDecoration className="top-[60%] left-[25%] hidden lg:block" animation="animate-float-2" delay={2.5}>
        <DotCircle size={14} color="#A78BFA" opacity={0.5} />
      </FloatingDecoration>

      <div className="relative z-10 flex flex-col items-center gap-5 text-center max-w-2xl">
        <p className="font-inter text-lg sm:text-xl text-muted">
          {t.hero.greeting}
        </p>

        <h1 className="font-outfit font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-dark leading-tight">
          {t.hero.name}
        </h1>

        <div className="flex items-center gap-3">
          <div className="h-[3px] w-8 bg-primary rounded-full" />
          <p className="font-outfit font-semibold text-xl sm:text-2xl text-primary">
            {t.hero.role}
          </p>
          <div className="h-[3px] w-8 bg-primary rounded-full" />
        </div>

        <div className="flex gap-4 mt-3">
          <a
            href="mailto:contato.daviwmpereira@gmail.com"
            className="social-icon"
            aria-label="Email"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-10 6L2 7" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/daviwesleym/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#7C3AED">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/Offdavicode"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#7C3AED">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>

        <a href="#contact" className="cartoon-btn mt-4 text-base">
          {t.hero.cta}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center gap-2 text-muted text-sm font-inter animate-bounce-slow">
        <span>{t.hero.scrollDown}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
