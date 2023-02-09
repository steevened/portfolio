import React from 'react';
import tw from 'twin.macro';
import { useModalStore } from '../store/ModalStore';
import { motion, Variants } from 'framer-motion';
import { shallow } from 'zustand/shallow';

const styles = {
  container: [tw`w-full`, tw`absolute top-0 left-0 z-50 text-white`],
  menu: [tw`flex justify-between cursor-pointer`],
  button: [
    tw`flex justify-between items-center  w-full py-2.5 px-10 bg-slate-900/20 backdrop-blur-lg`,
  ],
  ul: [
    tw`flex flex-col items-center bg-slate-900/20 backdrop-blur-lg w-5/6 mx-auto mt-5 gap-2.5 p-2.5`,
  ],
  li: [tw`block p-2.5`],
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const { toggleModal } = useModalStore();

  const { isOpen } = useModalStore(
    (state) => ({
      isOpen: state.isOpen,
    }),
    shallow
  );

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      css={styles.container}
    >
      <motion.button
        css={styles.button}
        onClick={() => toggleModal()}
        whileTap={{ scale: 0.97 }}
      >
        Menu
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: 'inset(0% 0% 0% 0% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        css={styles.ul}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <motion.li css={styles.li} variants={itemVariants}>
          Item 1
        </motion.li>
        <motion.li css={styles.li} variants={itemVariants}>
          Item 2
        </motion.li>
        <motion.li css={styles.li} variants={itemVariants}>
          Item 3
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
