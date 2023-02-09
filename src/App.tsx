import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import tw from 'twin.macro';

const styles = {
  container: [tw`min-h-screen`, tw`bg-primary`],
};

function App() {
  return (
    <div css={styles.container}>
      <Hero />
    </div>
  );
}

export default App;
