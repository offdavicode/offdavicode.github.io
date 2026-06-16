import { useLanguage } from '../i18n';
import {
  WavyDivider,
  FloatingDecoration,
  StarShape,
  DotCircle,
} from './Decorations';

const projectsData = [
  {
    image: '/jj.jpeg',
    url: 'https://jjengenhariaoficial.com.br/',
    tags: ['React', 'TailwindCSS'],
  },
  {
    image: '/byteway.png',
    url: 'https://bytewaytecnologia.com.br/',
    tags: ['React', 'TypeScript'],
  },
  {
    image: 'https://github.com/offdavicode/adivinhe-o-campeao/raw/main/public/preview.png',
    url: 'https://adivinheocampeao.netlify.app/',
    tags: ['React', 'JavaScript', 'API'],
  },
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <>
      <WavyDivider fillTop="#FDF6EC" fillBottom="#F5EDE0" />

      <section
        id="projects"
        className="relative w-full flex flex-col items-center text-center px-5 sm:px-8 py-16 sm:py-24 section-beige overflow-hidden"
      >
        <FloatingDecoration className="top-20 right-[8%] hidden sm:block" animation="animate-float-2" delay={0.5}>
          <StarShape size={24} />
        </FloatingDecoration>
        <FloatingDecoration className="bottom-24 left-[10%] hidden sm:block" animation="animate-float-1" delay={1}>
          <DotCircle size={20} color="#7C3AED" opacity={0.3} />
        </FloatingDecoration>

        <div className="flex items-center gap-4 mb-12">
          <div className="h-[3px] w-10 bg-primary/30 rounded-full" />
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-primary-dark">
            {t.projects.title}
          </h2>
          <div className="h-[3px] w-10 bg-primary/30 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-5xl">
          {projectsData.map((project, index) => {
            const translatedProject = t.projects.items[index];
            return (
              <a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cartoon-card group flex flex-col overflow-hidden"
              >
                <div className="w-full aspect-video overflow-hidden bg-beige">
                  <img
                    src={project.image}
                    alt={translatedProject.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col gap-3 p-5 sm:p-6 text-left flex-1">
                  <h3 className="font-outfit font-bold text-lg text-primary-dark">
                    {translatedProject.name}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-1">
                    {translatedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-outfit font-medium px-3 py-1 rounded-full bg-primary-50 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 mt-2 text-primary font-outfit font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>{t.projects.viewProject}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
