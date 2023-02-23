import './styles/App.css';
import { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import Bg from './components/Bg';
import Overlay from './components/overlay/Overlay';
import Picture from './components/Picture';
import NameCard from './components/InfoCards/NameCard';
import Info from './components/Info';
import Resume from './components/InfoCards/Resume';
import LinkedinCard from './components/InfoCards/LinkedinCard';
import GithubCard from './components/InfoCards/GithubCard';

export default function App() {
  return (
    <div className="relative">
      <Bg />
      <div className="bg-slate-100 dark:bg-slate-900 dark:text-gray-100 h-full min-h-screen duration-100">
        <Navbar />
        <Overlay />
        <main className="pt-28 mx-5 md:pt-[150px] md:mx-8 flex flex-col md:flex-row gap-5">
          <div className="flex flex-col gap-5 flex-1 ">
            <div className="flex flex-col lg:flex-row gap-5">
              <Picture />
              <NameCard />
            </div>
            <div>
              <Info />
            </div>
          </div>
          <div className="flex-1">
            <div className="grid h-full md:grid-cols-2 gap-5 place-items-center">
              <Resume />
              <LinkedinCard />
              <GithubCard />
              <GithubCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
