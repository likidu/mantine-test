import { TextInput, createTheme, rem } from '@mantine/core';
import classes from './textInput.module.css';

export const textInput = createTheme({
  components: {
    TextInput: TextInput.extend({
      defaultProps: {
        size: 'md',
      },

      /* Override variants */
      classNames: classes,

      /* Override the sm, md, lg  */
      vars: (theme, props) => {
        if (props.size === 'sm') {
          return {
            wrapper: {
              /* TODO: Replace these values with CSS variables resolver values. */
              '--input-height': rem(28),
              '--input-padding-x': rem(8),
            },
          };
        }

        if (props.size === 'md') {
          return {
            wrapper: {
              /* TODO: Replace these values with CSS variables resolver values. */
              '--input-height': rem(32),
              '--input-padding-x': rem(12),
            },
          };
        }

        if (props.size === 'lg') {
          return {
            label: {
              '--input-label-size': theme.fontSizes.md,
              '--label-fz': theme.fontSizes.md,
            },
            wrapper: {
              /* TODO: Replace these values with CSS variables resolver values. */
              '--input-height': rem(40),
              '--input-padding-x': rem(12),
              '--input-fz': theme.fontSizes.md,
            },
            error: {
              '--input-error-size': theme.fontSizes.sm,
              '--input-error-fz': theme.fontSizes.sm,
            },
          };
        }

        return { label: {}, wrapper: {}, error: {} };
      },
    }),
  },
});
