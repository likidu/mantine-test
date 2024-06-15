import { AppShell, Button, Drawer, Group, Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { AppShellWrapper, NewText } from '@/components/uikit';

export function Demo() {
  const [opened, { open, close }] = useDisclosure();
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);

  return (
    <AppShellWrapper>
      <AppShell
        // header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
        }}
        padding="md"
      >
        <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

        <AppShell.Main style={{ backgroundColor: 'var(--mantine-color-body' }}>
          <Group justify="center">
            <ColorSchemeToggle />
          </Group>

          <Group justify="center">
            <Button onClick={open}>Open drawer</Button>
            <Button onClick={() => setNoTransitionOpened(true)} variant="default">
              Fade transition
            </Button>
          </Group>
          <NewText animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2 }}>
            Text with motion
          </NewText>

          <Drawer
            opened={opened}
            onClose={close}
            position="right"
            title="Authentication"
            overlayProps={{ backgroundOpacity: 0.7, blur: 6 }}
          >
            <Text>I am a drawer.</Text>
          </Drawer>

          <Modal
            opened={noTransitionOpened}
            onClose={() => setNoTransitionOpened(false)}
            title="Please consider this"
            // transitionProps={{ transition: 'scale', timingFunction: 'easeInOut', duration: 100 }}
            overlayProps={{ backgroundOpacity: 0.7, blur: 6 }}
            centered
          >
            fade transition 600ms linear transition
          </Modal>
        </AppShell.Main>
      </AppShell>
    </AppShellWrapper>
  );
}
