import { Menu, X } from 'lucide-react';
import '../index.css';
import { useState } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="fixed w-full z-10 bg-gray-950/90 backdrop-blur-sm shadow-fav">

        <div className="relative flex justify-center">
          <div className="background-animate absolute -top-16 z-10 mx-auto h-10 w-full max-w-8xl bg-gradient-to-r  from-primary via-indigo-500 to-purple-500 blur-3xl"></div>
        </div>
        <div className="flex items-center justify-end sm:justify-center h-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">

          <button className="sm:hidden text-gray-300 text-2xl" onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <ul className={`flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-gray-300 ${isMenuOpen ? 'absolute top-20 left-0 w-full items-center justify-start bg-gray-950/90 p-6' : 'hidden sm:flex'}`}>
            <li>
              <Link to="sobre-mim" smooth={true} duration={500} offset={-200} className="font-normal hover:font-bold transition-all duration-200" href="#sobre-mim" onClick={() => setIsMenuOpen(false)}>
                Sobre Mim
              </Link>
            </li>

            <li>
              <Link to="habilidades" smooth={true} duration={500} offset={-200} className="font-normal hover:font-bold transition-all duration-200" href="#habilidades" onClick={() => setIsMenuOpen(false)}>
                Habilidades
              </Link>
            </li>

            <li>
              <Link to="projetos" smooth={true} duration={500} offset={-80} className="font-normal hover:font-bold transition-all duration-200" href="#projetos" onClick={() => setIsMenuOpen(false)}>
                Projetos
              </Link>
            </li>

            <li>
              <Link to="contato" smooth={true} duration={500} offset={-80} className="font-normal hover:font-bold transition-all duration-200" href="#contato" onClick={() => setIsMenuOpen(false)}>
                Contato
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;