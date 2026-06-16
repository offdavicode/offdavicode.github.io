import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../i18n';
import {
  WavyDivider,
  FloatingDecoration,
  StarShape,
  CodeBrackets,
} from './Decorations';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

type FormData = {
  from_name: string;
  from_email: string;
  message: string;
};

type ToastState = {
  show: boolean;
  type: 'success' | 'error';
  message: string;
};

export default function Contact() {
  const { t } = useLanguage();
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<ToastState>({ show: false, type: 'success', message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: 'success', message: '' }), 3000);
  };

  const onSubmit = async (data: FormData) => {
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.from_name,
          from_email: data.from_email,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      showToast('success', t.contact.success);
      reset();
    } catch {
      showToast('error', t.contact.error);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <WavyDivider fillTop="#F5EDE0" fillBottom="#FDF6EC" />

      <section
        id="contact"
        className="relative w-full flex flex-col items-center px-5 sm:px-8 py-16 sm:py-24 section-cream overflow-hidden"
      >
        <FloatingDecoration className="top-16 left-[8%] hidden sm:block" animation="animate-float-1">
          <StarShape size={22} color="#F59E0B" />
        </FloatingDecoration>
        <FloatingDecoration className="bottom-20 right-[12%] hidden sm:block" animation="animate-float-2" delay={1}>
          <CodeBrackets size={28} color="#A78BFA" />
        </FloatingDecoration>

        <div className="flex items-center gap-4 mb-3 text-center">
          <div className="h-[3px] w-10 bg-primary/30 rounded-full" />
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-primary-dark">
            {t.contact.title}
          </h2>
          <div className="h-[3px] w-10 bg-primary/30 rounded-full" />
        </div>

        <p className="text-muted font-inter mb-12 text-base text-center max-w-md">
          {t.contact.subtitle}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full max-w-4xl items-start">
          <div className="flex flex-col gap-5">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7l-10 6L2 7" />
                  </svg>
                ),
                title: 'Email',
                content: 'contato.daviwmpereira@gmail.com',
                link: 'mailto:contato.daviwmpereira@gmail.com',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#7C3AED">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
                title: 'LinkedIn',
                content: 'Davi Wesley',
                link: 'https://www.linkedin.com/in/daviwesleym/',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#7C3AED">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                ),
                title: 'GitHub',
                content: 'Offdavicode',
                link: 'https://github.com/Offdavicode',
              },
            ].map(({ icon, title, content, link }) => (
              <a
                key={title}
                href={link}
                target={title !== 'Email' ? '_blank' : undefined}
                rel={title !== 'Email' ? 'noopener noreferrer' : undefined}
                className="cartoon-card flex items-center gap-4 p-5 group"
              >
                <div className="p-3 rounded-2xl bg-primary-50 border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
                  {icon}
                </div>
                <div className="text-left">
                  <p className="font-outfit font-bold text-primary-dark text-sm">
                    {title}
                  </p>
                  <p className="text-muted text-sm">{content}</p>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="cartoon-card p-6 sm:p-8 flex flex-col gap-4"
            style={{ boxShadow: '6px 6px 0px 0px rgba(124, 58, 237, 0.12)' }}
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="from_name" className="font-outfit font-semibold text-sm text-primary-dark text-left">
                {t.contact.name}
              </label>
              <input
                id="from_name"
                type="text"
                className="cartoon-input"
                placeholder={t.contact.namePlaceholder}
                {...register('from_name', { required: t.contact.nameRequired })}
              />
              {errors.from_name && (
                <span className="text-red-500 text-xs text-left font-inter">{errors.from_name.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="from_email" className="font-outfit font-semibold text-sm text-primary-dark text-left">
                {t.contact.email}
              </label>
              <input
                id="from_email"
                type="email"
                className="cartoon-input"
                placeholder={t.contact.emailPlaceholder}
                {...register('from_email', {
                  required: t.contact.emailRequired,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t.contact.emailInvalid,
                  },
                })}
              />
              {errors.from_email && (
                <span className="text-red-500 text-xs text-left font-inter">{errors.from_email.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-outfit font-semibold text-sm text-primary-dark text-left">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                rows={5}
                className="cartoon-input resize-none"
                placeholder={t.contact.messagePlaceholder}
                {...register('message', { required: t.contact.messageRequired })}
              />
              {errors.message && (
                <span className="text-red-500 text-xs text-left font-inter">{errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="cartoon-btn justify-center mt-2 text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {t.contact.sending}
                </>
              ) : (
                <>
                  {t.contact.send}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

        {toast.show && (
          <div className={`toast ${toast.type === 'success' ? 'toast-success' : 'toast-error'}`}>
            {toast.message}
          </div>
        )}
      </section>
    </>
  );
}
