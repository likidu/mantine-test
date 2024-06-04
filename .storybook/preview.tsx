import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import '@mantine/core/styles.layer.css';
import {
  Controls,
  Description,
  DocsContainer,
  Primary,
  Stories,
  Subtitle,
  Title,
} from '@storybook/blocks';
import { addons } from '@storybook/preview-api';
import { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { DARK_MODE_EVENT_NAME, useDarkMode } from 'storybook-dark-mode';
import { theme } from '../src/theme';

const channel = addons.getChannel();

function sendDarkModelEvent(callback: any) {
  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, callback);
    return () => channel.off(DARK_MODE_EVENT_NAME, callback);
  }, [channel, callback]);
}

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useMantineColorScheme();
  const handleColorScheme = (value: boolean) => setColorScheme(value ? 'dark' : 'light');

  sendDarkModelEvent(handleColorScheme);

  return <>{children}</>;
}

export const decorators = [
  (renderStory: any) => <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>,
  (renderStory: any) => <MantineProvider theme={theme}>{renderStory()}</MantineProvider>,
];

const preview: Preview = {
  parameters: {
    layout: 'centered',
    docs: {
      container: (props) => {
        const [isDark, setDark] = useState(useDarkMode());

        sendDarkModelEvent(setDark);

        return <DocsContainer {...props} theme={isDark ? themes.dark : themes.light} />;
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  /* Enable auto preview globally */
  tags: ['autodocs'],
};

export default preview;
