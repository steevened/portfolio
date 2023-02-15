import React from 'react';
import tw, { styled } from 'twin.macro';
import { motion, AnimatePresence } from 'framer-motion';

interface isOpenProps {
  isOpen: boolean;
}

const Menu = styled(motion.nav)(() => [
  tw`bg-gray-800 text-white`,
  tw`flex items-center justify-center z-20`,
  tw`fixed top-0 left-0 w-3/4 h-full`,
  tw`transition-all ease-in-out duration-300`,
]);

// const menu = { hidden: {} };

const Ul = tw(motion.ul)`flex flex-col gap-6 text-2xl`;

function MobileMenu() {
  return (
    <Menu
      // variants={item}
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Ul>
        <li>LINK</li>
        <li>LINK</li>
        <li>LINK</li>
        <li>LINK</li>
      </Ul>
    </Menu>
  );
}

export default MobileMenu;
