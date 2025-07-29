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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <section id="contato">
      <div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-14 font-Inter text-white text-center bg-gray-950">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold pb-12">
          Entre em contato!
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-24 w-full max-w-7xl items-center">
          <div className="flex flex-col gap-8 text-indigo-600 w-full">
            {[{
              Icon: Mail,
              title: 'Email',
              content: 'contato.daviwmpereira@gmail.com',
              link: 'mailto:contato.daviwmpereira@gmail.com'
            }, {
              Icon: Linkedin,
              title: 'LinkedIn',
              content: 'Davi Wesley',
              link: 'https://www.linkedin.com/in/daviwesleym/'
            }, {
              Icon: Github,
              title: 'GitHub',
              content: 'Offdavicode',
              link: 'https://github.com/Offdavicode'
            }].map(({ Icon, title, content, link }) => (
              <div key={title} className="flex items-start gap-4">
                <Icon size={32} />
                <div className="flex flex-col items-start">
                  <p className="text-lg sm:text-xl font-bold text-indigo-50">{title}</p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-400 text-gray-400 text-sm sm:text-base font-light transition-all"
                  >
                    {content}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            {[{ id: 'name', label: 'Nome', type: 'text' }, { id: 'email', label: 'Email', type: 'email' }].map(
              ({ id, label, type }) => (
                <div key={id} className="w-full flex flex-col gap-2">
                  <label htmlFor={id} className="text-left text-lg sm:text-xl">
                    {label}
                  </label>
                  <input type={type} id={id} name={id} value={formData[id as keyof typeof formData]}
                    onChange={handleChange} required className="shadow-fav bg-gray-800 p-3 text-sm sm:text-base w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
              )
            )}

            <div className="w-full flex flex-col gap-2">
              <label htmlFor="message" className="text-left text-lg sm:text-xl">
                Mensagem
              </label>
              <textarea id="message" name="message" value={formData.message}
                onChange={handleChange} rows={5} required className="shadow-fav bg-gray-800 p-3 text-sm sm:text-base w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <button type="submit" className="mt-4 p-3 bg-indigo-600 w-full rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-fav text-white font-medium">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contato;
