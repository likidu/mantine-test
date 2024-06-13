import type { Meta, StoryObj } from '@storybook/react';
import { Anchor } from '../components/uikit';

const meta: Meta<typeof Anchor> = {
  title: 'Design System/Universal/Anchor',
  component: Anchor,
  render: ({ ...args }) => <Anchor {...args}>This is a link</Anchor>,
  args: {
    type: 'primary',
    size: 'md',
    isExternal: false,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'text'],
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: {
        defaultValue: {
          summary: 'md',
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

type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  args: {
    type: 'primary',
  },
};
