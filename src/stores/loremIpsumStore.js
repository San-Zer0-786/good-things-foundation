import { defineStore } from 'pinia';

export const useLoremIpsumStore = defineStore({
  id: 'LoremIpsumStore',
  state: () => ({
    loremIpsumData: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit malesuada tortor, nec gravida ex malesuada non. Aliquam ullamcorper lorem eu odio tempor, vel dictum ex interdum. Etiam congue augue ac ipsum vestibulum, vel tempor lorem efficitur. Donec vel ante sed est scelerisque molestie. Integer consectetur purus non ligula efficitur lobortis. Duis volutpat lorem vel malesuada ultrices.`,
      `Pellentesque quis risus magna. In tincidunt orci non odio accumsan, ac luctus ante tristique. Ut id urna eu urna sollicitudin ultricies. Proin sed ligula velit. In hac habitasse platea dictumst. Sed eget sapien et metus dapibus maximus. Curabitur convallis, libero at auctor efficitur, lacus elit dictum urna, nec viverra ipsum justo vitae nulla. Suspendisse potenti. Vivamus vel est eu mauris dignissim lacinia. Phasellus eu neque purus. Vivamus maximus odio a dolor aliquam, ut varius orci iaculis.`,
      `Vivamus ac velit at quam lacinia bibendum eu eget nunc. Nam vestibulum efficitur luctus. Fusce vehicula facilisis tortor, sit amet maximus metus cursus eu. Suspendisse eget nunc eu nunc tincidunt lacinia non a orci. Duis commodo quam ut libero varius suscipit. Ut ultricies mauris at facilisis vestibulum. Sed finibus, odio id eleifend congue, enim lacus ultrices odio, in mollis tortor orci at mi.`,
      `Curabitur fringilla nunc eget aliquam cursus. Donec tincidunt malesuada est, vitae bibendum ex pharetra at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed hendrerit at orci ac volutpat. Donec feugiat justo non nibh aliquet, in commodo magna venenatis.`
    ],
  }),
  actions: {
    getRandomLoremIpsum() {
      const randomIndex = Math.floor(Math.random() * this.loremIpsumData.length);
      return this.loremIpsumData[randomIndex];
    },
  },
});
