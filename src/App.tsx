import './styles/App.css';
import { useState, useEffect, Fragment, ReactNode } from 'react';
import { Listbox, Transition } from '@headlessui/react';

const moonIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
};

const sunIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );
};

const systemIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
      />
    </svg>
  );
};

interface Options {
  icon: () => JSX.Element;
  text: string;
}

const options: Array<Options> = [
  {
    icon: systemIcon,
    text: 'system',
  },
  {
    icon: sunIcon,
    text: 'dark',
  },
  {
    icon: moonIcon,
    text: 'light',
  },
];

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const onWindowMatch = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && darkQuery.matches)
    ) {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  };

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;
      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [theme]);

  console.log(theme);

  darkQuery.addEventListener('change', (e) => {
    if (!('theme' in localStorage)) {
      if (e.matches) {
        element.classList.add('dark');
      } else {
        element.classList.remove('dark');
      }
    }
  });

  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-gray-100 h-full min-h-screen duration-100">
      <div className="fixed top-5 right-10">
        <Listbox value={theme} onChange={setTheme}>
          <div className="relative mt-1">
            <Listbox.Button className="text-sky-500 flex items-center justify-center m-1">
              {theme === 'dark'
                ? sunIcon()
                : theme === 'system'
                ? systemIcon()
                : moonIcon()}
            </Listbox.Button>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-90 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-100 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Listbox.Options className="absolute z-50 top-full right-0 mt-1 rounded-lg shadow-lg ring-slate-900/10 overflow-hidden w-36 text-sm text-slate-700 font-semibold dark:ring-0 dark:shadow-[inset 0 1px 0 0 hsl(0deg 0% 100% / 5%)] dark:bg-slate-800 dark:text-slate-300 duration-100 ring-1 mt-4">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.text}
                    value={option.text}
                    as={Fragment}
                    className={({ active }: { active: boolean }) =>
                      `relative select-none py-2 flex items-center justify-start gap-2 ${
                        active && 'bg-slate-200 dark:bg-slate-600/30'
                      }`
                    }
                  >
                    {({ selected }) => (
                      <li
                        className={`cursor-pointer py-1 px-2 flex items-center justify-start ${
                          selected
                            ? 'text-sky-600'
                            : 'text-slate-500 dark:text-slate-300'
                        }`}
                      >
                        <div>{option.icon()}</div>
                        {option.text[0].toUpperCase()}
                        {option.text.slice(1)}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
}
