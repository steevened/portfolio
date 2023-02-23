import { useModalStore } from '../../store/ModalStore';
export default function Overlay() {
  const isOpen = useModalStore((state) => state.isOpen);
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <div
      onClick={() => closeModal()}
      className={`absolute inset-0  z-50 bg-black/50  backdrop-blur-sm md:hidden  ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    />
  );
}
