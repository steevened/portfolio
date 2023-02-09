import React from 'react';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';

interface IsInNav {
  isInNav: boolean;
}

interface ContentType {
  children: string;
  isInNav: boolean;
}

const Btn = styled(motion.button)(({ isInNav }: IsInNav) => [
  tw`bg-gradient-to-bl from-blueBtn to-purpleBtn`,
  tw`py-1 px-2`,
  tw`rounded-lg`,
  tw`font-bold text-lg`,
  isInNav && tw`hidden md:block absolute right-5 lg:right-16`,
]);

function BtnGradient({ children, isInNav }: ContentType) {
  return (
    <Btn
      isInNav={isInNav}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: 'spring',
        stiffness: 1000,
      }}
    >
      {children}
    </Btn>
  );
}

export default BtnGradient;
