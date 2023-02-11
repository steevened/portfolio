import React from 'react';
import tw from 'twin.macro';
import circle from '../assets/circles.svg';
import Navbar from './Navbar';
import grad1 from '../assets/planetGrad1.svg';
import grad2 from '../assets/planet2.svg';
import sphere1 from '../assets/sphere1.svg';
import sphere2 from '../assets/sphere2.svg';
import bg from '../assets/bg-img.svg';
import { motion } from 'framer-motion';
import BtnGradient from './BtnGradient';

const styles = {
  container: [tw`bg-cover bg-center h-screen relative`],
  text: [
    tw`text-white text-center text-4xl font-bold leading-5 md:text-6xl z-20`,
    tw`flex h-full items-center justify-center flex-col gap-10`,
  ],
};

const Hero: React.FC = () => {
  return (
    <div css={styles.container} style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <motion.div css={styles.text}>
        <h2>I'm Steven </h2>
        <h3 className="leading-10">A Frontend Web Developer</h3>
        <BtnGradient isInNav={false}>Know More</BtnGradient>
      </motion.div>
    </div>
  );
};

export default Hero;
