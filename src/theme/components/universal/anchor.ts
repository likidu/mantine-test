import { Anchor, createTheme } from '@mantine/core';
import classes from './anchor.module.css';

export const anchor = createTheme({
  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        size: 'md',
      },
      /* Override variants */
      classNames: classes,
    }),
  },
});
