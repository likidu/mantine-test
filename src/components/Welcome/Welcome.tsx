import { Badge, Button, Text, Title } from '@mantine/core';
import { Anchor } from '../uikit';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Mantine
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Vite project includes a minimal setup, if you want to learn more on Mantine +
        Vite integration follow{' '}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg" isExternal>
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file.
      </Text>
      <p>
        <Button variant="default">Hello world</Button>
      </p>
      <p>
        <Badge>A badge</Badge>
      </p>
      <p></p>
    </>
  );
}
