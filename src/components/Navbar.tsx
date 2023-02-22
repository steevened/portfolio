import ThemeToggle from './ThemeToggle';
import logo from '../assets/logoBlue.png';
import Btn from './buttons/Btn';
import { useState } from 'react';

export default function Navbar() {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  return (
    <nav className="bg-white/40 backdrop-blur-md px-2 sm:px-4 py-2.5 dark:bg-black/40 fixed top-2 sm:top-6 inset-x-2 sm:inset-x-6 rounded-lg shadow-lg z-50">
      <div className="container flex  flex-wrap items-center justify-between mx-auto">
        <a
          href="/"
          onClick={(e) => e.preventDefault()}
          className="flex items-center"
        >
          <img src={logo} className="h-6 mr-3 sm:h-9" alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Steven
          </span>
        </a>
        <div className="flex items-center md:order-2">
          <Btn primaryClr="sky">Get Started</Btn>
          <div className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-2">
            <input
              className="appearance-none"
              type="checkbox"
              name="toggle"
              id="toggle"
              onChange={(e) => setIsHidden(e.target.checked)}
            />
            <label htmlFor="toggle">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </label>
          </div>
          <div className="hidden md:block ml-2">
            <ThemeToggle />
          </div>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isHidden && 'hidden'
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 rounded-lg bg-white backdrop-blur-md shadow-lg  md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0 md:bg-white/30 dark:bg-slate-900/10 md:dark:bg-slate-900/10 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
