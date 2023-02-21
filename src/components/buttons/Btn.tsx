import * as React from 'react';
interface Props {
  children: React.ReactNode;
  primaryClr: string;
}

export default function Btn({ children, primaryClr }: Props) {
  return (
    <button
      className={`text-white bg-gradient-to-r from-${primaryClr}-500 to-${primaryClr}-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-${primaryClr}-300 dark:focus:ring-${primaryClr}-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all`}
    >
      {children}
    </button>
  );
}
