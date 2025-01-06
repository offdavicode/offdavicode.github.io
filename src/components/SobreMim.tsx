import '../index.css';

function SobreMim() {
  return (
    <section id="sobre-mim">
      <div className="flex flex-col gap-4 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-14 font-Inter text-white bg-gray-950">
        <div className="flex pb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Sobre mim</h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center w-full gap-8 lg:gap-12 justify-center relative">
          <div className="flex justify-center lg:block lg:mb-0">
            <img src="/icon.png" alt="Icon" className="w-48 sm:w-56 md:w-64 lg:w-72 hover:scale-105 transition-all duration-200 cursor-pointer " />
          </div>

          <div className="max-w-[700px] text-justify text-gray-300">
            <p className="text-base sm:text-lg">
              Sou estudante de Ciência da Computação e muito interessado em criar experiências incríveis na web. Meu foco principal está no desenvolvimento front-end, e estou sempre mergulhando em novas tecnologias.
            </p>
            <br />
            <p className="text-base sm:text-lg">
              Sou movido pela curiosidade e pela vontade de aprender algo novo todos os dias. Além disso, adoro compartilhar conhecimento e trocar ideias, o que me ajuda a crescer e também a contribuir com quem está ao meu redor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMim;
