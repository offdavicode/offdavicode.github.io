import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import '../index.css';
import { Link } from 'react-scroll';

function Inicial() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-20 sm:py-40 lg:py-56 font-Inter text-white text-center grow bg-gray-950 h-screen relative">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-center items-center">
          <p className="font-light text-2xl sm:text-3xl md:text-4xl">Olá, me chamo</p>
          <p className="text-indigo-400 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl">Davi Wesley</p>
        </div>

        <div className="flex gap-2 items-center justify-center">
          <p className="text-white text-sm sm:text-base md:text-lg">Desenvolvedor</p>
          <p className="text-indigo-400 font-bold text-sm sm:text-base md:text-lg">Front-End</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 py-6 sm:py-8">
        <Link to="contato" smooth duration={500} offset={-80}>
          <button className="flex gap-2 px-4 py-2 sm:px-5 sm:py-3 bg-indigo-600 justify-center items-center rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-fav">
            <span className="text-sm sm:text-base whitespace-nowrap">Entre em contato</span>
            <ArrowRight />
          </button>
        </Link>

        <div className="flex gap-3 sm:gap-4 text-indigo-600 justify-center items-center">
          <a href="mailto:contato.daviwmpereira@gmail.com" className="hover:text-indigo-700 transition-all duration-200" aria-label="Enviar email">
            <Mail size={32} />
          </a>
          <a href="https://www.linkedin.com/in/daviwesleym/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-700 transition-all duration-200" aria-label="LinkedIn">
            <Linkedin size={32} />
          </a>
          <a href="https://github.com/Offdavicode" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-700 transition-all duration-200" aria-label="GitHub">
            <Github size={32} />
          </a>
        </div>
      </div>

      <div className="text-gray-300 flex gap-2 font-light absolute bottom-10 sm:bottom-20 items-center justify-center w-full text-xs sm:text-sm">
        <p>Continue</p>
        <ArrowDown className="stroke stroke-1 animate-bounce" />
      </div>
    </div>
  );
}

export default Inicial;
