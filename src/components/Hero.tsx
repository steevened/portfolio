import React from 'react';
import tw from 'twin.macro';
import circle from '../assets/circles.svg';
import Navbar from './Navbar';

const HeroContainer = tw.div`
  bg-cover
  bg-center
  h-screen
  p-8
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer style={{ backgroundImage: `url(${circle})` }}>
      <Navbar />
    </HeroContainer>
  );
};

export default Hero;
