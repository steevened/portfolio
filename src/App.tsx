import './styles/App.css';
import './styles/custom/backgrounds.css';
import Hero from './components/Hero';
import tw from 'twin.macro';
import OverlayComponent from './components/Overlay';
import { useModalStore } from './store/ModalStore';
import { shallow } from 'zustand/shallow';
import Services from './components/Services';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { Menu, Transition } from '@headlessui/react';

const styles = {
  container: [
    tw`isolate bg-white  text-white`,
    tw`dark:(bg-gray-999 text-gray-999)`,
  ],
};

function App() {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    addEventListener('load', () =>
      document.documentElement.classList.add('loaded')
    );
  }, []);

  const { isOpen } = useModalStore(
    (state) => ({
      isOpen: state.isOpen,
    }),
    shallow
  );

  return (
    <div className="backgrounds" css={styles.container}>
      <OverlayComponent isOpen={isOpen} />
      <Navbar />
      {/* <Hero /> */}
      <Services />
    </div>
  );
}

export default App;
