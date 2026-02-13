import { create } from "zustand";

const useUiStore = create((set, get) => ({
  hide: false,
  showHeader: false,
  showHeaderMenu: true,
  setShowHeaderMenu: (val) => {
    set({ showHeaderMenu: val });
  },
  setShowHeader: (val) => {
    set({ showHeader: val });
  },
  setHide: (value) => {
    set({ hide: value });
  },
}));

export default useUiStore;
