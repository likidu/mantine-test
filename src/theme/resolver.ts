/* TODO: Redefine Mantine CSS variables that will be used by individual component. */

import { CSSVariablesResolver } from '@mantine/core';

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-color-focus-ring': theme.colors.brand[4],
  },
  light: {
    '--mantine-color-default-color': theme.colors.red[5],
  },
  dark: {
    '--mantine-color-default-color': theme.colors.red[8],
  },
});
