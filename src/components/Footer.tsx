import { Link } from 'react-scroll';
import '../index.css';

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-50 shadow-fav px-4 sm:px-8 md:px-16 lg:px-24 pt-12 pb-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-12 mb-8">

        <div className="flex flex-col items-center sm:items-start gap-2">
          <img className="w-24 sm:w-28 lg:w-32" src="./icon.png" alt="Logo" />
          <span className="font-bold text-lg">Davi Wesley</span>
          <span className="text-sm font-light text-gray-400">Desenvolvedor Web</span>
        </div>

        <nav className="flex flex-col items-center sm:items-start gap-2">
          <p className="font-bold text-lg sm:text-xl pb-1">Geral</p>
          <Link to="sobre-mim" smooth duration={500} offset={-200} className="font-light text-gray-400 hover:text-gray-50 transition-all duration-200 cursor-pointer">
            Sobre mim
          </Link>
          <Link to="habilidades" smooth duration={500} offset={-200} className="font-light text-gray-400 hover:text-gray-50 transition-all duration-200 cursor-pointer">
            Habilidades
          </Link>
          <Link to="projetos" smooth duration={500} offset={-80} className="font-light text-gray-400 hover:text-gray-50 transition-all duration-200 cursor-pointer">
            Projetos
          </Link>
          <Link to="contato" smooth duration={500} offset={-80} className="font-light text-gray-400 hover:text-gray-50 transition-all duration-200 cursor-pointer">
            Contato
          </Link>
        </nav>

        <nav className="flex flex-col items-center sm:items-start gap-2">
          <p className="font-bold text-lg sm:text-xl pb-1">Redes Sociais</p>
          <a href="https://www.linkedin.com/in/daviwesleym/" target="_blank" rel="noopener noreferrer" className="font-light text-gray-400 hover:text-gray-50 transition-all duration-200">
            Linkedin
          </a>
          <a href="https://github.com/Offdavicode" target="_blank" rel="noopener noreferrer" className="font-light text-gray-400 hover:text-gray-50 transition-all duration-200">
            GitHub
          </a>
          <a href="#" className="font-light text-gray-400 hover:text-gray-50 transition-all duration-200" >
            Instagram
          </a>
          <a href="mailto:contato.daviwmpereira@gmail.com" className="font-light text-gray-400 hover:text-gray-50 transition-all duration-200">
            Email
          </a>
        </nav>
      </div>

      <hr className="border-t border-gray-900 mb-4" />

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-center">
        <p>© 2025 - Todos os direitos reservados -</p>
        <p className="text-indigo-400">Davi Wesley</p>
      </div>
    </footer>
  );
}

export default Footer;
