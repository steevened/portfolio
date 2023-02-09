import React from 'react';
import tw, { styled } from 'twin.macro';
import { useModalStore } from '../store/ModalStore';

interface isShowedProps {
  isOpen?: boolean;
}

const Overlay = styled.div(({ isOpen }: isShowedProps) => [
  tw`transition-all duration-300 ease-in-out z-10 absolute inset-0 bg-black/50 backdrop-blur-2xl`,
  isOpen ? tw` pointer-events-auto` : tw`opacity-0 pointer-events-none`,
]);

function OverlayComponent({ isOpen }: isShowedProps) {
  const { closeModal } = useModalStore();

  return <Overlay onClick={() => closeModal()} isOpen={isOpen} />;
}

export default OverlayComponent;
