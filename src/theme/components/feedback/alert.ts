import { Alert, createTheme } from '@mantine/core';
import classes from './alert.module.css';

export const alert = createTheme({
  components: {
    Alert: Alert.extend({
      /* Override variants */
      classNames: classes,
    }),
  },
});
