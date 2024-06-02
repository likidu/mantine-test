import { MantineColorsTuple, MantineThemeColors, virtualColor } from '@mantine/core';

const skyLight: MantineColorsTuple = [
  '#FAFDFF',
  '#F3FAFE',
  '#E7F7FE',
  '#CEEDFC',
  '#B6E4FB',
  '#85D2F8',
  '#54C0F5',
  '#0CA6F2',
  '#0B88E0',
  '#095EB2',
];

const skyDark: MantineColorsTuple = [
  '#021422',
  '#032943',
  '#04365A',
  '#064470',
  '#085F9D',
  '#096CB4',
  '#0B88E0',
  '#0CA6F2',
  '#54C0F5',
  '#85D2F8',
];

const redLight: MantineColorsTuple = [
  '#FFFCFC',
  '#FEF7F7',
  '#FDEFEF',
  '#FBE7E7',
  '#F8CECE',
  '#F3AEAE',
  '#F08D83',
  '#E65C5C',
  '#C5434E',
  '#851D38',
];

const redDark: MantineColorsTuple = [
  '#1E0A0C',
  '#3B1417',
  '#4F1B1F',
  '#622127',
  '#8A2F37',
  '#9E363E',
  '#C5434E',
  '#E65C5C',
  '#F08D83',
  '#F3AEAE',
];

export const colors: Partial<MantineThemeColors> = {
  'sky-light': skyLight,
  'sky-dark': skyDark,

  brand: virtualColor({
    name: 'brand',
    light: 'sky-light',
    dark: 'sky-dark',
  }),

  'red-light': redLight,
  'red-dark': redDark,

  red: virtualColor({
    name: 'red',
    light: 'red-light',
    dark: 'red-dark',
  }),
};
