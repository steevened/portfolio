import ViewContainer from './ViewContainer';
import { GiPaintBucket } from 'react-icons/gi';

interface ContentProps {
  children: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
}

export default function Description() {
  return (
    <ViewContainer className="mx-5 md:mx-8 mt-6 flex flex-col md:flex-row p-10 md:px-12 gap-5 md:gap-8 justify-center">
      <Content
        title="Frontend "
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
      >
        <svg
          className="w-12 h-12 fill-current text-sky-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z"
            clipRule="evenodd"
          />
        </svg>
      </Content>
      <Content
        title="Backend"
        desc="Neque viverra justo nec ultrices dui. Est ultricies integer quis auctor elit."
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          className="w-12 h-12 fill-current text-sky-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
          />
        </svg>
      </Content>
      <Content
        title="Full Stack"
        desc="Urna porttitor rhoncus dolor purus non enim praesent ornare."
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-12 h-12 fill-current text-sky-500"
        >
          <path
            fillRule="evenodd"
            d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
            clipRule="evenodd"
          />
        </svg>
      </Content>
    </ViewContainer>
  );
}

function Content({ title, desc, className, children }: ContentProps) {
  return (
    <div className={`${className} flex-1 flex flex-col gap-2`}>
      <div className="inline-flex">{children}</div>
      <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold text-2xl md:text-4xl">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm md:text-lg mt-2">
        {desc}
      </p>
    </div>
  );
}
