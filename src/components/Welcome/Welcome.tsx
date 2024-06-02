import { Anchor, Button, Input, Text, Title } from '@mantine/core';
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
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file.
      </Text>

      <p>
        <Button size="sm">Create cluster</Button>
      </p>
      <p>
        <Button>Create cluster</Button>
      </p>
      <p>
        <Button size="lg">Create cluster</Button>
      </p>
      <p>
        <Button variant="light">Create cluster</Button>
      </p>
      <p>
        <Button variant="danger">Create cluster</Button>
      </p>
      <p>
        <Button variant="default">Create cluster</Button>
      </p>
      <p>
        <Input variant="filled" placeholder="Underline input" />
      </p>
    </>
  );
}
