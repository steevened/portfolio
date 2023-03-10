import { create } from 'zustand';

interface Modal {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}

export const useModalStore = create<Modal>((set) => ({
  isOpen: false,
  openModal: () => set((state) => ({ isOpen: true })),
  closeModal: () => set((state) => ({ isOpen: false })),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));
