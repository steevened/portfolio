import React from 'react';
import tw from 'twin.macro';
import { useModalStore } from '../store/ModalStore';
import { motion, Variants } from 'framer-motion';
import { shallow } from 'zustand/shallow';

const styles = {
  container: [
    tw`w-full h-14`,
    tw`fixed top-0 left-0`,
    tw`z-50 text-white `,
    tw`md:(flex items-center justify-center)`,
  ],
  menu: [tw`flex justify-between cursor-pointer md:hidden`],
  button: [
    tw`flex justify-between items-center`,
    tw`w-full py-2.5 px-10 md:hidden`,
  ],
  ul: [
    tw`flex flex-col items-center md:hidden`,
    tw`bg-purple-900/10 backdrop-blur-3xl`,
    tw`w-5/6 mx-auto mt-5 gap-2.5 p-2.5`,
  ],
  li: [tw`block p-2.5`],
  ulMd: [tw`hidden  md:flex gap-10`],
  btn: [
    tw`bg-gradient-to-bl from-blueBtn to-purpleBtn`,
    tw`py-1 px-2`,
    tw`rounded-lg`,
    tw`hidden md:block absolute right-5 lg:right-16`,
    tw`font-bold`,
  ],
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
        onClick={() => toggleModal()}
        whileTap={{ scale: 0.99 }}
        css={styles.button}
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
      <motion.ul css={styles.ulMd}>
        <motion.li>Item 1</motion.li>
        <motion.li>Item 2</motion.li>
        <motion.li>Item 3</motion.li>
      </motion.ul>
      <motion.button
        whileTap={{ scale: 0.97 }}
        transition={{
          type: 'spring',
          stiffness: 1000,
        }}
        css={styles.btn}
      >
        Contact
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
