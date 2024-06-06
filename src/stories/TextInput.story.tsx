import { TextInput } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

// type ButtonPropsAndCustomArgs = React.ComponentProps<typeof Button> & { text?: string };

const meta: Meta<typeof TextInput> = {
  title: 'Design System/Universal/TextInput',
  component: TextInput,
  render: ({ ...args }) => <TextInput placeholder="Placeholder" {...args} />,
  args: {
    size: 'md',
    label: 'Label',
    disabled: false,
    error: '',
    withAsterisk: false,
  },
  argTypes: {
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
    error: {
      control: 'text',
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    withAsterisk: {
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

type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  args: {
    size: 'lg',
  },
};
