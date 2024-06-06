import { TextInput, createTheme, rem } from '@mantine/core';

export const textInput = createTheme({
  components: {
    TextInput: TextInput.extend({
      defaultProps: {
        size: 'md',
      },

      /* Override variants */

      /* Override the sm, md, lg  */
      vars: (_, props) => {
        if (props.size === 'sm') {
          return {
            label: {
              /* TODO: Override --mantine-font-size-lg globally. */
              '--input-label-size': rem(12),
              '--label-fz': rem(12),
            },
            wrapper: {
              '--input-height': rem(28),
              '--input-padding-x': rem(8),
              '--input-fz': rem(12),
            },
          };
        }

        if (props.size === 'md') {
          return {
            label: {
              /* TODO: Override --mantine-font-size-lg globally. */
              '--input-label-size': rem(14),
              '--label-fz': rem(14),
            },
            wrapper: {
              '--input-height': rem(32),
              '--input-padding-x': rem(12),
              '--input-fz': rem(14),
            },
          };
        }

        if (props.size === 'lg') {
          return {
            label: {
              /* TODO: Override --mantine-font-size-lg globally. */
              '--input-label-size': rem(14),
              '--label-fz': rem(14),
            },
            wrapper: {
              '--input-height': rem(40),
              '--input-padding-x': rem(12),
              '--input-fz': rem(14),
            },
          };
        }

        return { label: {}, wrapper: {} };
      },
    }),
  },
});
