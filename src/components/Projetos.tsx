import '../index.css'

interface Projetos {
  name: string;
  src: string;
  alt: string;
  description: string;
  url: string;
}

const projeto: Projetos[] = [
  { name: 'JJ Engenharia', description: 'Site para uma empresa de engenharia', src: '/jj.jpeg', alt: 'Projeto JJ', url: 'https://jjengenhariaoficial.com.br/' },
  { name: 'ByteWay', description: 'Site para uma empresa de TI', src: '/byteway.png', alt: 'Projeto ByteWay', url: 'https://bytewaytecnologia.com.br/' },
  { name: 'Adivinhe o Campeão', description: 'Jogo interativo onde você deve adivinhar o campeão do LOL', src: 'https://github.com/offdavicode/adivinhe-o-campeao/raw/main/public/preview.png', alt: 'Projeto Adivinhe o Campeão', url: 'https://adivinheocampeao.netlify.app/' },
];

function CardProjetos({ name, description, src, alt, url }: Projetos) {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-md bg-gray-800/30 shadow-fav items-center justify-center transition duration-300 ease-in-out hover:scale-105">
      <div className='flex gap-2 flex-col text-center'>
        <p className='text-xl text-gray-200 font-semibold'>{name}</p>
        <p className='text-sm text-gray-300'>{description}</p>
      </div>
      <img
        className="w-full max-w-xs rounded-md object-cover aspect-square"
        src={src}
        alt={alt}
        aria-label={name}
      />
      <a
        className='text-gray-400 hover:text-gray-200 text-sm sm:text-base underline font-medium'
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Veja mais detalhes!
      </a>
    </div>
  );
}

function Projetos() {
  return (
    <section id='projetos'>
      <div className='flex flex-col gap-4 items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-14 font-Inter text-white text-center grow bg-gray-950'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-extrabold pb-8'>Projetos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {projeto.map((projetos) => (
            <CardProjetos key={projetos.name} {...projetos} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;
