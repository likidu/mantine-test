import type { Meta } from '@storybook/react';
import { Demo } from '../pages/Demo.page';

const meta: Meta<typeof Demo> = {
  title: 'AppShell',
  component: Demo,
  render: ({ ...args }) => <Demo {...args} />,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  argTypes: {},
};

export default meta;

export const Usage = () => <Demo />;
