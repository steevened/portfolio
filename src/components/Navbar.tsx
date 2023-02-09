import React from 'react';
import tw from 'twin.macro';
import { useModalStore } from '../store/ModalStore';

const styles = {
  container: [tw`w-full`, tw`absolute top-0 left-0`, tw`p-4`],
  menu: [tw`flex justify-end cursor-pointer`],
};

const Navbar = () => {
  const { openModal } = useModalStore();

  return (
    <nav css={styles.container}>
      <div onClick={() => openModal()} css={styles.menu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
