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
import Grid from './components/Grid';
import Description from './components/Description';

export default function App() {
  return (
    <div className="relative h-full">
      <Bg />
      <div className="bg-slate-100 dark:bg-slate-900 dark:text-gray-100 h-full min-h-screen duration-100">
        <Navbar />
        <Overlay />
        <main className="pt-28 mx-5 md:pt-[150px] md:mx-8 flex flex-col md:flex-row gap-5">
          <Grid />
        </main>
        <Description />
      </div>
    </div>
  );
}
