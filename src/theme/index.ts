import { DEFAULT_THEME, createTheme, mergeThemeOverrides } from '@mantine/core';

import { resolver as variablesResolver } from './resolver';

import { colors } from './colors';
import { badge, button, textInput } from './components';

const basic = createTheme({
  /* Always enable focus indicator even with mouse clicking for better accessability */
  focusRing: 'always',

  /* Color related theme */
  colors,
  primaryColor: 'brand',
  primaryShade: 7,

  /* We use Inter as the default font */
  fontFamily: `Inter, ${DEFAULT_THEME.fontFamily}`,

  defaultRadius: 'md',
});

export const theme = mergeThemeOverrides(basic, badge, button, textInput);

export const resolver = variablesResolver;
