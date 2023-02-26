import './styles/App.css';
import Navbar from './components/Navbar';
import Bg from './components/Bg';
import Overlay from './components/overlay/Overlay';
import Grid from './components/Grid';
import Description from './components/Description';
import Works from './components/works/Works';

export default function App() {
  return (
    <div className="relative h-full">
      <Bg />
      <div className="bg-slate-100 dark:bg-slate-900 dark:text-gray-100 h-full min-h-screen duration-100 px-5 pd:mx-8">
        <Navbar />
        <Overlay />
        <main className="pt-28  md:pt-[150px] flex flex-col md:flex-row gap-5">
          <Grid />
        </main>
        <Description />
        <Works />
      </div>
    </div>
  );
}
