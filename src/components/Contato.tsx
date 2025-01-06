import { Mail, Linkedin, Github } from 'lucide-react';
import React, { useState } from 'react';

function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <section id='contato'>
      <div className='flex flex-col gap-4 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-14 font-Inter text-white text-center grow bg-gray-950'>
        <div className='flex pb-8'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-extrabold'>Entre em contato!</h1>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-24 w-full'>
          <div className='flex flex-col gap-4 text-indigo-600 justify-center items-start'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-4'>
                <Mail size={32} />
                <div className='flex items-start justify-center flex-col'>
                  <p className='text-lg sm:text-xl font-bold text-indigo-50'>Email</p>
                  <a className='hover:text-indigo-700 transition-all duration-200' href="mailto:contato.daviwmpereira@gmail.com">
                    <p className='text-gray-400 font-light text-base'>contato.daviwmpereira@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-4'>
                <Linkedin size={32} />
                <div className='flex items-start justify-center flex-col'>
                  <p className='text-lg sm:text-xl font-bold text-indigo-50'>Linkedin</p>
                  <a className='hover:text-indigo-700 transition-all duration-200' href="https://www.linkedin.com/in/davi-wesley">
                    <p className='text-gray-400 font-light text-base'>Davi Wesley</p>
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-4'>
                <Github size={32} />
                <div className='flex items-start justify-center flex-col'>
                  <p className='text-lg sm:text-xl font-bold text-indigo-50'>GitHub</p>
                  <a className='hover:text-indigo-700 transition-all duration-200' href="https://github.com/Offdavicode">
                    <p className='text-gray-400 font-light text-base'>Offdavicode</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col items-start justify-center gap-4 w-full max-w-lg">
            <label className='flex text-lg sm:text-xl' htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow-fav flex bg-gray-800 p-3 text-sm sm:text-base flex-1 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <label className='flex text-lg sm:text-xl' htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-fav flex bg-gray-800 p-3 text-sm sm:text-base flex-1 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <label className='flex text-lg sm:text-xl' htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="shadow-fav flex bg-gray-800 p-3 text-sm sm:text-base flex-1 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="flex gap-2 mt-4 p-3 bg-indigo-600 justify-center items-center rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-fav w-full"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contato;
