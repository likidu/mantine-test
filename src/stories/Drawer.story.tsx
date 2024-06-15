import { Button, Drawer, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Drawer> = {
  title: 'Design System/Overlay/Drawer',
  component: Drawer,
  render: ({ ...args }) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Button onClick={open}>Open drawer</Button>

        <Drawer
          offset={8}
          radius="md"
          opened={opened}
          onClose={close}
          position="right"
          title="Authentication"
          // overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        >
          <Text>I am a drawer.</Text>
        </Drawer>
      </>
    );
  },
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};
