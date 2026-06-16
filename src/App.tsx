import { LanguageProvider } from './i18n'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col font-inter">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App