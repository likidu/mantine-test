import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Router } from './Router';
import { resolver, theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <Router />
    </MantineProvider>
  );
}
