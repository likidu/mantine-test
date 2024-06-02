import { Button, createTheme, rem } from '@mantine/core';
import classes from './button.module.css';

export const button = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        size: 'md',
      },

      /* Override variants */
      classNames: classes,

      /* Override the sm, md, lg  */
      vars: (_, props) => {
        if (props.size === 'sm') {
          return {
            root: {
              '--button-height': rem(28),
              '--button-padding-x': rem(8),
              '--button-fz': rem(12),
            },
          };
        }

        if (props.size === 'md') {
          return {
            root: {
              '--button-height': rem(32),
              '--button-padding-x': rem(12),
              '--button-fz': rem(14),
            },
          };
        }

        if (props.size === 'lg') {
          return {
            root: {
              '--button-height': rem(40),
              '--button-padding-x': rem(12),
              '--button-fz': rem(14),
            },
          };
        }

        return { root: {} };
      },
    }),
  },
});
