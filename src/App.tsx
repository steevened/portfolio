import './styles/App.css';
import { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import Bg from './components/Bg';
import Overlay from './components/overlay/Overlay';
import Picture from './components/Picture';
import NameCard from './components/NameCard';
import Info from './components/Info';
import Resume from './components/Resume';

export default function App() {
  return (
    <div className="relative">
      <Bg />
      <div className="bg-slate-100 dark:bg-slate-900 dark:text-gray-100 h-full min-h-screen duration-100">
        <Navbar />
        <Overlay />
        <main className="pt-20 mx-2.5 md:pt-[120px] md:mx-6 grid gap-5">
          <Picture />
          <NameCard />
          <Info />
          <Resume />
        </main>
      </div>
    </div>
  );
}
