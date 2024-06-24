import { MantineColorsTuple, MantineThemeColors, virtualColor } from '@mantine/core';

const grayLight: MantineColorsTuple = [
  '#FFFFFF',
  '#FCFCFC',
  '#F9F9F9',
  '#F5F5F5',
  '#ECECEC',
  '#E6E6E6',
  '#B3B3B3',
  '#8C8C8C',
  '#4D4D4D',
  '#292929',
];

const grayDark: MantineColorsTuple = [
  '#111111',
  '#161616',
  '#202020',
  '#292929',
  '#333333',
  '#4D4D4D',
  '#666666',
  '#999999',
  '#CCCCCC',
  '#ECECEC',
];

const skyLight: MantineColorsTuple = [
  '#FAFDFF',
  '#F3FBFE',
  '#E7F6FE',
  '#DBF2FD',
  '#B6E4FB',
  '#85D3F9',
  '#55C1F6',
  '#0CA6F2',
  '#0881D0',
  '#0967AA',
];

const skyDark: MantineColorsTuple = [
  '#10191E',
  '#10222E',
  '#0E334A',
  '#0D4367',
  '#0C5484',
  '#0967AA',
  '#0881D0',
  '#0CA6F2',
  '#55C1F6',
  '#B6E4FB',
];

const redLight: MantineColorsTuple = [
  '#FFFCFC',
  '#FEF7F7',
  '#FCEFEF',
  '#FBE7E7',
  '#F7CECE',
  '#F3ADAD',
  '#EE8D8D',
  '#EB6565',
  '#BF404B',
  '#931F33',
];

const redDark: MantineColorsTuple = [
  '#1B1314',
  '#271518',
  '#3D181E',
  '#531C25',
  '#70202E',
  '#931F33',
  '#BF404B',
  '#EB6565',
  '#EE8D8D',
  '#F3ADAD',
];

export const colors: Partial<MantineThemeColors> = {
  'gray-light': grayLight,
  'gray-dark': grayDark,

  gray: virtualColor({
    name: 'gray',
    light: 'gray-light',
    dark: 'gray-dark',
  }),

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
