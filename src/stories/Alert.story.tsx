import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../components/uikit';

const meta: Meta<typeof Alert> = {
  title: 'Design System/Feedback/Alert',
  component: Alert,
  render: ({ ...args }) => (
    <Alert {...args}>
      Current IP Address not added. You will not be able to connect to databases from this address.
    </Alert>
  ),
  args: {
    type: 'primary',
    title: 'This is alert',
    withCloseButton: false,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'info', 'success', 'warning', 'error'],
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    withCloseButton: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    title: {
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: {
          summary: '',
        },
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    type: 'primary',
  },
};
