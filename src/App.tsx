import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import tw from 'twin.macro';
import shallow from 'zustand/shallow';

import { useCounterStore } from './store/CounterStore';
import { useEffect } from 'react';

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: [tw`min-h-screen`, tw`bg-primary`],
};

function App() {
  const { count, title, posts } = useCounterStore(
    (state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts,
    }),
    shallow
  );

  const { increment, decrement, getPosts, clearStore, multiply } =
    useCounterStore();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div css={styles.container}>
      <Navbar />
      {/* <Hero /> */}
      <div className="text-white pt-10">
        <h2>
          {title} : {count}
        </h2>

        <div>
          <button
            onClick={() => {
              increment(1);
            }}
            className="border"
          >
            Increment by 1
          </button>
          <button
            className="border"
            onClick={() => {
              decrement(1);
            }}
          >
            Decrement by 1
          </button>
          <button
            className="border"
            onClick={() => {
              multiply(2);
            }}
          >
            Multiply by 2
          </button>
          <button onClick={() => clearStore()}>Clean</button>
          <hr />
          {JSON.stringify(posts)}
        </div>
      </div>
    </div>
  );
}

export default App;
