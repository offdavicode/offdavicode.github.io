import Footer from './components/Footer'
import Header from './components/Header'
import Inicial from './components/Inicial'
import Projetos from './components/Projetos'
import SobreMim from './components/SobreMim'
import Habilidades from './components/Habilidades'
import './index.css'
import Contato from './components/Contato'

function Home() {
  return (
    <div className=' flex flex-col font-Inter selection:bg-[rgb(129,140,248)] selection:text-white'>
      <Header />
      <Inicial />
      <SobreMim />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  )
}

export default Home