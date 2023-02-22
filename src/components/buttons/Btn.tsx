import * as React from 'react';
interface Props {
  children: React.ReactNode;
}

export default function Btn({ children }: Props) {
  return (
    <button
      className={`text-white bg-gradient-to-r from-sky-500 to-sky-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all`}
    >
      {children}
    </button>
  );
}
