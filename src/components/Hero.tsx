import React from 'react';
import tw from 'twin.macro';
import circle from '../assets/circles.svg';
import Navbar from './Navbar';
import grad1 from '../assets/planetGrad1.svg';
import grad2 from '../assets/planet2.svg';
import sphere1 from '../assets/sphere1.svg';
import sphere2 from '../assets/sphere2.svg';
import bg from '../assets/bg-img.svg';

const styles = {
  container: [tw`bg-cover bg-center h-screen relative`],
  grad1: [tw`absolute top-0 -left-48 w-[500px] h-[500px] md:hidden`],
  grad2: [tw`absolute top-0 -right-48 w-[400px] h-[400px] md:hidden`],
  sphere1: [tw`absolute top-64 -right-32  w-[200px] h-[200px] md:hidden`],
  sphere2: [tw`absolute top-80 -left-24  w-[200px] h-[200px] md:hidden`],
};

const Hero: React.FC = () => {
  return (
    <div css={styles.container} style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div css={styles.grad1}>
        <img src={grad1} alt="gradient" />
      </div>
      <div css={styles.grad2}>
        <img src={grad2} alt="gradient" />
      </div>
      <div css={styles.sphere1}>
        <img src={sphere1} alt="sphere" />
      </div>
      <div css={styles.sphere2}>
        <img src={sphere2} alt="sphere" />
      </div>
    </div>
  );
};

export default Hero;
