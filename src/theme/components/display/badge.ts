import { Badge, createTheme } from '@mantine/core';

export const badge = createTheme({
  components: {
    Badge: Badge.extend({
      defaultProps: {
        variant: 'default',
        size: 'md',
      },
    }),
  },
});
