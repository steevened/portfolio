import React from 'react';
import tw from 'twin.macro';
import circle from '../assets/circles.svg';

const HeroContainer = tw.div`
  bg-cover
  bg-center
  h-screen
  p-8
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer
      style={{ backgroundImage: `url(${circle})` }}
    ></HeroContainer>
  );
};

export default Hero;
