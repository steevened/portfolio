import { create } from 'zustand';

const theme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : 'system';

export const useThemeStore = create(() => {});
