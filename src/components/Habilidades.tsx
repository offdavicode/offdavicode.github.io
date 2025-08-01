import '../index.css';

interface Skill {
  name: string;
  src: string;
  alt: string;
}

const skills: Skill[] = [
  { name: 'HTML', src: '/html.png', alt: 'Logo HTML' },
  { name: 'CSS', src: '/css.png', alt: 'Logo CSS' },
  { name: 'JavaScript', src: '/js.png', alt: 'Logo JavaScript' },
  { name: 'TypeScript', src: '/typescript.png', alt: 'Logo TypeScript' },
  { name: 'React', src: '/react.webp', alt: 'Logo React' },
  { name: 'TailwindCSS', src: '/tailwindcss.webp', alt: 'Logo TailwindCSS' },
  { name: 'Figma', src: '/figma.png', alt: 'Logo Figma' },
  { name: 'Photoshop', src: '/photoshop.png', alt: 'Logo Photoshop' },
];

function SkillCard({ name, src, alt }: Skill) {
  return (
    <div className="flex items-center justify-center relative group">
      <img
        className="w-20 sm:w-24 md:w-28 lg:w-32 transition duration-300 ease-in-out hover:cursor-pointer hover:scale-105"
        src={src}
        alt={alt}
        aria-label={name}
      />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-fav max-w-[80vw]">
        {name}
      </div>
    </div>
  );
}

function Habilidades() {
  return (
    <section id="habilidades">
      <div className="flex flex-col gap-4 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-14 font-Inter text-white text-center grow bg-gray-950">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold pb-8">Habilidades</h1>
        <p className="text-center text-gray-300 text-sm sm:text-base md:text-lg text-pretty max-w-4xl">
          Essas são as habilidades, ferramentas e tecnologias que uso:
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-8 p-8 w-full max-w-7xl">
          {skills.map(skill => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
