import ThemeToggle from './ThemeToggle';
import code from '../../public/icons8-google-code.svg';

export default function Navbar() {
  return (
    <header className="fixed z-40 backdrop-blur bg-white/75 dark:bg-transparent border-b border-slate-50/[0.06]  w-full h-16 flex items-center justify-between px-10">
      <div className="text-white w-12 h-12 flex items-center group cursor-pointer">
        <img src={code} alt="code icon" />
        <span className="text-slate-500 dark:text-slate-300 group-hover:text-sky-500 hover:dark:text-sky-500 duration-300 font-semibold text-2xl ml-1">
          Stevened
        </span>
      </div>
      <ThemeToggle />
    </header>
  );
}
