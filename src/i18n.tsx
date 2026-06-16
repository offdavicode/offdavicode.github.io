import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type Language = 'en' | 'pt';

const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Davi Wesley',
      role: 'Front-End Developer',
      cta: 'Get in touch',
      scrollDown: 'Scroll down',
    },
    about: {
      title: 'About Me',
      p1: "I'm a Computer Science student passionate about creating amazing web experiences. My main focus is on front-end development, and I'm always diving into new technologies.",
      p2: "I'm driven by curiosity and the desire to learn something new every day. I also love sharing knowledge and exchanging ideas, which helps me grow and contribute to those around me.",
    },
    skills: {
      title: 'Skills',
      subtitle: 'Tools and technologies I work with:',
    },
    projects: {
      title: 'Projects',
      viewProject: 'View Project',
      items: [
        { name: 'JJ Engenharia', description: 'Website for an engineering company' },
        { name: 'ByteWay', description: 'Website for an IT company' },
        { name: 'Guess the Champion', description: 'Interactive game — guess the LoL champion' },
      ],
    },
    contact: {
      title: 'Get in touch!',
      subtitle: "Have a project in mind or just want to say hi? I'd love to hear from you.",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Write your message here...',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully! ✨',
      error: 'Failed to send. Please try again.',
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      emailInvalid: 'Please enter a valid email',
      messageRequired: 'Message is required',
    },
    footer: {
      general: 'Navigation',
      socialMedia: 'Social Media',
      rights: 'All rights reserved',
      role: 'Web Developer',
    },
  },
  pt: {
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, me chamo',
      name: 'Davi Wesley',
      role: 'Desenvolvedor Front-End',
      cta: 'Entre em contato',
      scrollDown: 'Continue',
    },
    about: {
      title: 'Sobre Mim',
      p1: 'Sou estudante de Ciência da Computação e muito interessado em criar experiências incríveis na web. Meu foco principal está no desenvolvimento front-end, e estou sempre mergulhando em novas tecnologias.',
      p2: 'Sou movido pela curiosidade e pela vontade de aprender algo novo todos os dias. Além disso, adoro compartilhar conhecimento e trocar ideias, o que me ajuda a crescer e também a contribuir com quem está ao meu redor.',
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Ferramentas e tecnologias que eu utilizo:',
    },
    projects: {
      title: 'Projetos',
      viewProject: 'Ver Projeto',
      items: [
        { name: 'JJ Engenharia', description: 'Site para uma empresa de engenharia' },
        { name: 'ByteWay', description: 'Site para uma empresa de TI' },
        { name: 'Adivinhe o Campeão', description: 'Jogo interativo — adivinhe o campeão do LoL' },
      ],
    },
    contact: {
      title: 'Entre em contato!',
      subtitle: 'Tem um projeto em mente ou só quer mandar um oi? Adoraria ouvir você.',
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      namePlaceholder: 'Seu nome',
      emailPlaceholder: 'seu@email.com',
      messagePlaceholder: 'Escreva sua mensagem aqui...',
      send: 'Enviar Mensagem',
      sending: 'Enviando...',
      success: 'Mensagem enviada com sucesso! ✨',
      error: 'Falha ao enviar. Tente novamente.',
      nameRequired: 'Nome é obrigatório',
      emailRequired: 'Email é obrigatório',
      emailInvalid: 'Digite um email válido',
      messageRequired: 'Mensagem é obrigatória',
    },
    footer: {
      general: 'Navegação',
      socialMedia: 'Redes Sociais',
      rights: 'Todos os direitos reservados',
      role: 'Desenvolvedor Web',
    },
  },
} as const;

type Translations = typeof translations.en;

interface LanguageContextType {
  t: Translations;
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'pt' : 'en'));
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ t, language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
