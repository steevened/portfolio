import { create } from 'zustand';

interface Posts {
  id: number;
  title: string;
  body: string;
}

interface CounterState {
  count: number;
  title: string;
  posts: Posts[];
  getPosts: () => Promise<void>;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  clearStore: () => void;
  multiply: (value: number) => void;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  count: 1,
  title: 'using zustand',
  posts: [],

  increment: (value: number) =>
    set((state) => ({
      ...state,
      count: state.count + value,
    })),
  decrement: (value: number) =>
    set((state) => ({
      ...state,
      count: state.count - value,
    })),
  getPosts: async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    set((state) => ({
      ...state,
      posts,
    }));
  },
  clearStore: () => {
    set({}, true);
  },
  multiply: (value: number) => {
    const { count } = get();
    set({ count: count * value });
  },
}));
