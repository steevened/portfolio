import './App.css';
import Hero from './components/Hero';
import tw from 'twin.macro';
import OverlayComponent from './components/Overlay';
import { useModalStore } from './store/ModalStore';
import { shallow } from 'zustand/shallow';

import Services from './components/Services';
import Gradient1 from './components/Gradients/Gradient1';
import Gradient2 from './components/Gradients/Gradient2';

const styles = {
  container: [tw`min-h-screen h-full relative overflow-hidden`, tw`bg-primary`],
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
      <Hero />
      <Services />
    </div>
  );
}

export default App;
