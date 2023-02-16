import * as React from 'react';
import tw from 'twin.macro';
import { useModalStore } from '../store/ModalStore';
import { motion, Variants } from 'framer-motion';
import { shallow } from 'zustand/shallow';
import BtnGradient from './BtnGradient';
import Icon from './Icons/Icon';

const styles = {
  container: [
    tw`w-full h-14 px-4`,
    tw`fixed top-0 left-0`,
    tw`z-50 text-black `,
    tw`flex items-center justify-between`,
    tw`dark:(text-white)`,
  ],
  logo: [tw`flex  items-center gap-1`],
  span: [tw`font-bold text-lg`],
  button: [tw`sm:hidden`],
  ul: [
    tw`flex flex-col items-center sm:hidden`,
    tw`bg-purple-900/10 backdrop-blur-3xl`,
    tw`w-5/6 max-w-[300px] mx-auto  gap-2.5 p-2.5`,
    tw`absolute top-14 left-1/2 -translate-x-1/2`,
  ],
  ulBox: [
    tw`flex items-center justify-between  w-full px-2 py-2 border-t-[1px] border-purple-900/50`,
  ],
  li: [tw`py-1`],
  darkToggle: [tw`hidden sm:block`],
  ulMd: [tw`hidden  sm:flex gap-10`],
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

  // console.log(isOpen);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      css={styles.container}
    >
      {/* logo, always visible */}
      <div>
        <a css={styles.logo} href="/">
          <Icon icon="terminal-window" color="#eee" size="1.6em" gradient />
          <span css={styles.span}>Steven</span>
        </a>
      </div>
      {/* button to toggle mobile menu, visible only in sm */}
      <motion.button
        css={styles.button}
        onClick={() => toggleModal()}
        whileTap={{ scale: 0.95 }}
      >
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
      {/* mobile menu, toggeable only in sm */}
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
          Home
        </motion.li>
        <motion.li css={styles.li} variants={itemVariants}>
          About
        </motion.li>
        <motion.li css={styles.li} variants={itemVariants}>
          Work
        </motion.li>
        <motion.div css={styles.ulBox} variants={itemVariants}>
          <motion.li css={styles.li}>
            <BtnGradient isInNav={false}>Contact </BtnGradient>
          </motion.li>
          <p>Toggle</p>
        </motion.div>
      </motion.ul>
      {/* desktop menu, only visible from sm */}
      <motion.ul css={styles.ulMd}>
        <motion.li>Home</motion.li>
        <motion.li>About</motion.li>
        <motion.li>Work</motion.li>
      </motion.ul>
      <div css={styles.darkToggle}>
        <BtnGradient isInNav={false}>Contact </BtnGradient>
      </div>
    </motion.nav>
  );
};

export default Navbar;
