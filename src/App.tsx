import './styles/App.css';
import { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import Bg from './components/Bg';

export default function App() {
  return (
    <>
      <Bg />
      <div className="bg-slate-100 dark:bg-slate-900 dark:text-gray-100 h-full min-h-screen duration-100">
        <Navbar />
      </div>
    </>
  );
}
