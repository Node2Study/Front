import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: '',
  newSocialUser: '',
  accessToken: '',
  setUser: (newUser) => set({ user: newUser }),
  setAccessToken: (newToken) => set({ accessToken: newToken }),
  resetUser: () => set({ user: '', accessToken: '' }),
}));

export default useUserStore;
