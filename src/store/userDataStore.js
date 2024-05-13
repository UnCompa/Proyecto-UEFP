import {create} from 'zustand';

// Creamos el store global
export const UserStore = create((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
}));