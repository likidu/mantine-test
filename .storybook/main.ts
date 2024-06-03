import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.story.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', 'storybook-dark-mode'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

export default config;
