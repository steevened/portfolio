import './App.css';
import Hero from './components/Hero';
import tw from 'twin.macro';
import OverlayComponent from './components/Overlay';
import { useModalStore } from './store/ModalStore';
import { shallow } from 'zustand/shallow';
import MobileMenu from './components/MobileMenu';
import { motion, AnimatePresence } from 'framer-motion';

const styles = {
  container: [tw`min-h-screen`, tw`bg-primary`],
};

function App() {
  const { isOpen } = useModalStore(
    (state) => ({
      isOpen: state.isOpen,
    }),
    shallow
  );

  return (
    <div css={styles.container}>
      <OverlayComponent isOpen={isOpen} />
      {/* <AnimatePresence>{isOpen && <MobileMenu />}</AnimatePresence> */}
      <Hero />
    </div>
  );
}

export default App;
