import React from 'react';
import bg from '../assets/bg.avif';
import bgDark from '../assets/bg-dark.avif';

export default function Bg() {
  return (
    <div className="absolute  top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div className="w-[108rem] flex-none flex justify-end h-screen">
        <picture>
          <img
            src={bg}
            alt="background"
            className="w-[70rem] flex-none max-w-none dark:hidden"
            decoding="async"
          />
        </picture>
        <picture>
          <img
            className="w-[100rem] flex-none max-w-none hidden dark:block"
            src={bgDark}
            alt="background"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  );
}
