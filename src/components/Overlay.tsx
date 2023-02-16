import tw, { styled } from 'twin.macro';
import { useModalStore } from '../store/ModalStore';

interface isOpenProps {
  isOpen?: boolean;
}

const Overlay = styled.div(({ isOpen }: isOpenProps) => [
  tw`transition-all duration-300 ease-in-out z-50`,
  tw`bg-black/50 backdrop-blur-2xl`,
  tw`absolute inset-0 h-full sm:hidden`,
  isOpen ? tw` pointer-events-auto` : tw`opacity-0 pointer-events-none`,
]);

function OverlayComponent({ isOpen }: isOpenProps) {
  const { closeModal } = useModalStore();

  return <Overlay onClick={() => closeModal()} isOpen={isOpen} />;
}

export default OverlayComponent;
