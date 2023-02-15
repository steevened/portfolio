import React from 'react';
import tw from 'twin.macro';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import BtnGradient from './BtnGradient';
import gradgreen from '../assets/gradgreen.svg';
import grad2 from '../assets/grad2.svg';
import Gradient1 from './Gradients/Gradient1';

const styles = {
  container: [tw`bg-cover bg-center h-screen relative`],
  gradgreen: [tw`absolute -translate-x-1/2  z-10 pointer-events-none`],
  grad2: [tw`absolute right-0 z-10 pointer-events-none `],
  text: [
    tw`text-white text-center text-4xl font-bold leading-5 md:text-5xl `,
    tw`absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-full flex flex-col gap-5`,
  ],
};

const Hero: React.FC = () => {
  return (
    <div css={styles.container}>
      <Gradient1 />
      <div css={styles.gradgreen}>
        <img src={gradgreen} alt="gradient" />
      </div>
      <div css={styles.grad2}>
        <img src={grad2} alt="gradient" />
      </div>
      <Navbar />
      <motion.div css={styles.text}>
        <h2>I'm Steven </h2>
        <h3 className="leading-10">A Frontend Web Developer</h3>
        <div>
          <BtnGradient isInNav={false}>Know More</BtnGradient>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
