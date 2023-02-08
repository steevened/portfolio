import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import tw from 'twin.macro';

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: [tw`min-h-screen`, tw`bg-primary`],
};

function App() {
  return (
    <div css={styles.container}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
