/* TODO: Redefine Mantine CSS variables that will be used by individual component. */

import { CSSVariablesResolver } from '@mantine/core';

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    '--mantine-color-default-color': theme.colors.red[5],
  },
  dark: {
    '--mantine-color-default-color': theme.colors.red[8],
  },
});
