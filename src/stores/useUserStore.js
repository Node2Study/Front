import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      user: '',
      newSocialUser: '',
      accessToken: '',
      setUser: (newUser) => set({ user: newUser }),
      setNewSocialUser: (newUser) => set({ newSocialUser: newUser }),
      setAccessToken: (newToken) => set({ accessToken: newToken }),
      resetUser: () => set({ user: '', accessToken: '' }),
    }),
    {
      name: 'user-storage', // 로컬 스토리지에 저장될 키 이름
      partialize: (state) => ({ user: state.user }), // 필요한 상태만 저장
    },
  ),
);

export default useUserStore;
