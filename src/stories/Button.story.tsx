import { Button } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

// type ButtonPropsAndCustomArgs = React.ComponentProps<typeof Button> & { text?: string };

const meta: Meta<typeof Button> = {
  title: 'Design System/Universal/Button',
  component: Button,
  render: ({ ...args }) => <Button {...args}>This is button</Button>,
  args: {
    variant: 'filled',
    size: 'md',
    disabled: false,
    loading: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'light', 'default', 'subtle', 'danger'],
      table: {
        defaultValue: {
          summary: 'filled',
        },
      },
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      table: {
        defaultValue: {
          summary: 'md',
        },
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    loading: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'light',
  },
};
