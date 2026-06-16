import { useLanguage } from '../i18n';
import {
  WavyDivider,
  FloatingDecoration,
  StarShape,
  DotCircle,
} from './Decorations';

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <WavyDivider fillTop="#FDF6EC" fillBottom="#F5EDE0" />

      <section
        id="about"
        className="relative w-full flex flex-col items-center text-center px-5 sm:px-8 py-16 sm:py-24 section-beige overflow-hidden"
      >
        <FloatingDecoration className="top-12 right-[10%] hidden sm:block" animation="animate-float-2" delay={0.5}>
          <StarShape size={22} color="#F59E0B" />
        </FloatingDecoration>
        <FloatingDecoration className="bottom-16 left-[8%] hidden sm:block" animation="animate-float-1" delay={1}>
          <DotCircle size={18} color="#A78BFA" opacity={0.4} />
        </FloatingDecoration>

        <div className="flex items-center gap-4 mb-10">
          <div className="h-[3px] w-10 bg-primary/30 rounded-full" />
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-primary-dark">
            {t.about.title}
          </h2>
          <div className="h-[3px] w-10 bg-primary/30 rounded-full" />
        </div>

        <div className="cartoon-card p-8 sm:p-10 max-w-[700px] w-full relative">
          <div className="absolute top-0 left-8 right-8 h-[4px] bg-gradient-to-r from-primary-light via-primary to-primary-light rounded-b-full" />

          <div className="flex flex-col gap-5 text-left">
            <p className="text-base sm:text-lg leading-relaxed text-dark/80">
              {t.about.p1}
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-dark/80">
              {t.about.p2}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
