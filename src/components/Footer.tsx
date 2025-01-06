import { Link } from 'react-scroll';
import '../index.css';

function Footer() {
  return (
    <footer className="flex flex-col text-gray-50 items-center sm:items-stretch justify-between px-4 sm:px-8 md:px-16 lg:px-24 pt-8 gap-6 bg-gray-950 shadow-fav">
      <div className="flex flex-col sm:flex-row justify-between gap-8 lg:gap-0">
        <div className="flex flex-col items-center sm:items-start  justify-center gap-1 text-lg sm:text-xl">
          <img className="flex w-24 sm:w-28 lg:w-32" src="./icon.png" alt="" />
          <span className="font-bold">Davi Wesley</span>
          <span className="text-sm font-light">Desenvolvedor Web</span>
        </div>

        <nav className="flex flex-col gap-4 lg:gap-2">
          <p className="font-bold text-lg sm:text-xl pb-2">Geral</p>
          <nav className="flex flex-col justify-between gap-2">
            <Link
              to="sobre-mim"
              smooth={true}
              duration={500}
              offset={-200}
              href="#"
              className="font-light text-gray-400 hover:text-gray-50 transition-all duration-200"
            >
              Sobre mim
            </Link>
            <Link
              to="habilidades"
              smooth={true}
              duration={500}
              offset={-200}
              href="#"
              className="font-light text-gray-400 hover:text-gray-50 transition-all duration-200"
            >
              Habilidades
            </Link>
            <Link
              to="projetos"
              smooth={true}
              duration={500}
              offset={-80}
              href="#"
              className="font-light text-gray-400 hover:text-gray-50 transition-all duration-200"
            >
              Projetos
            </Link>
            <Link
              to="contato"
              smooth={true}
              duration={500}
              offset={-80}
              href="#"
              className="font-light text-gray-400 hover:text-gray-50 transition-all duration-200"
            >
              Contato
            </Link>
          </nav>
        </nav>

        <nav className="flex flex-col gap-4 lg:gap-2">
          <p className="font-bold text-lg sm:text-xl pb-2">Redes Sociais</p>
          <nav className="flex flex-col justify-between gap-2">
            <a href="#" className="font-light text-gray-400 hover:text-gray-50 transition-all duration-200">
              Linkedin
            </a>
            <a href="#" className="font-light text-gray-400 hover:text-gray-50 transition-all duration-200">
              GitHub
            </a>
            <a href="#" className="font-light text-gray-400 hover:text-gray-50 transition-all duration-200">
              Instagram
            </a>
            <a href="#" className="font-light text-gray-400 hover:text-gray-50 transition-all duration-200">
              Email
            </a>
          </nav>
        </nav>
      </div>

      <hr className="h-0.5 border-t-0 bg-gray-50 dark:bg-white/10" />

      <div className="pb-6 gap-4 flex flex-col items-center text-center select-none">
        <div className="flex flex-wrap items-center justify-center gap-1 text-sm">
          <p>© 2024 - Todos os direitos reservados - </p>
          <p className="text-indigo-400">Davi Wesley</p>
        </div>
        {/* <p className="text-sm">Desenvolvido por <a className="text-gray-50 hover:text-gray-400 transition-all duration-200 px-1" href="#">Nexting Code</a></p> */}
      </div>
    </footer>
  );
}

export default Footer;
