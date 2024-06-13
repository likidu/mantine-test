/* TODO: Redefine Mantine CSS variables that will be used by individual component. */

import { CSSVariablesResolver } from '@mantine/core';

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-color-focus-ring': theme.colors.brand[4],
  },
  light: {
    '--mantine-color-default-color': theme.colors.gray[7],
  },
  dark: {
    '--mantine-color-default-color': theme.colors.gray[7],
    /* By default, it uses [3] for the dark mode */
    '--mantine-color-brand-light-color': theme.colors.brand[7],
    '--mantine-color-red-light-color': theme.colors.red[7],
  },
});
