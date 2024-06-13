import { DEFAULT_THEME, createTheme, mergeThemeOverrides, rem } from '@mantine/core';

import { resolver as variablesResolver } from './resolver';

import { colors } from './colors';
import { alert, anchor, badge, button, textInput } from './components';

const basic = createTheme({
  /* Always enable focus indicator even with mouse clicking for better accessability */
  focusRing: 'always',

  /* Color related theme */
  colors,
  primaryColor: 'brand',
  primaryShade: 7,

  /* We use Inter as the default font */
  fontFamily: `Inter, ${DEFAULT_THEME.fontFamily}`,

  fontSizes: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
  },

  defaultRadius: 'md',
});

export const theme = mergeThemeOverrides(basic, anchor, alert, badge, button, textInput);

export const resolver = variablesResolver;
