import { Badge } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  title: 'Design System/Display/Badge',
  component: Badge,
  render: ({ ...args }) => <Badge {...args}>A badge</Badge>,
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

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};
