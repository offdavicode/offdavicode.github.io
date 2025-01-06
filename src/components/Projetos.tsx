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
  // { name: 'Salgados Finos', description: 'Cardapio digital ', src: '/salgados-finos.png', alt: 'Projeto JJ', url: 'https://cardapio-salgadosfinos.vercel.app/' },
  // { name: 'Em breve', description: 'Descrição em breve', src: '/em_breve.webp', alt: 'sem- projeto', url: '#' },
];

function CardProjetos({ name, description, src, alt, url }: Projetos) {
  return (
    <div className="gap-4 flex flex-col p-4 rounded-md bg-gray-800/30 shadow-fav items-center justify-center transition duration-300 ease-in-out hover:scale-105">
      <div className='flex gap-2 flex-col'>
        <p className='text-xl text-gray-200 font-semibold'>{name}</p>
        <p className='text-sm text-gray-300'>{description}</p>
      </div>
      <img className="w-full sm:w-80 object-cover aspect-square" src={src} alt={alt} aria-label={name} />
      <a className='text-gray-400 hover:text-gray-200 text-sm sm:text-base' href={url} >Veja mais detalhes!</a>
    </div>
  );
}

function Projetos() {
  return (
    <section id='projetos'>
      <div className='flex flex-col gap-4 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-14 font-Inter text-white text-center grow bg-gray-950'>
        <div className='flex pb-8'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-extrabold'>Projetos</h1>
        </div>
        <div>
          {/* Ajuste da grid para responsividade */}
          {/* sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  */}
          <div className="grid grid-cols-1 gap-8 p-8">
            {projeto.map(projetos => (
              <CardProjetos key={projetos.name} {...projetos} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projetos
