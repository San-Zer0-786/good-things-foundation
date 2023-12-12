import { defineStore } from 'pinia';

export const useMenuStore = defineStore({
  id: 'site',
  state: () => ({
    menuItems: [
      { text: 'Home', url: '/' },
      { text: 'What we do', url: '/#' },
      { text: 'The digital divide', url: '/#' },
      { text: 'Get involved', url: '/#' },
      { text: 'Our network', url: '/#' },
      { text: 'Insights', url: '/#' },
    ],
  }),
});