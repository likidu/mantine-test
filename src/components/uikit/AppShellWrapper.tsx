import { Box, useProps } from '@mantine/core';
import { useMutationObserver } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface AppShellWrapperProps {
  children: React.ReactNode;
}

const defaultProps: Partial<AppShellWrapperProps> = {};

export function AppShellWrapper(props: AppShellWrapperProps) {
  const { children } = useProps('AppShellWrapper', defaultProps, props);

  const [lastMutation, setLastMutation] = useState(false);

  const variants = {
    open: { scale: 0.96 },
    closed: { scale: 1 },
  };

  /* Observe 'mantine-Overlay-root' node be added or removed within the entire document. */
  /* This will tell if there is an overlay shown by a Model, Dialog or Drawer etc., */
  useMutationObserver(
    (mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const addedNode = mutation.addedNodes[0] as HTMLElement;
          const removedNode = mutation.removedNodes[0] as HTMLElement;

          if (addedNode?.classList.contains('mantine-Overlay-root')) {
            setLastMutation(true);
          } else if (removedNode?.classList.contains('mantine-Overlay-root')) {
            setLastMutation(false);
          }
        }
      });
    },
    {
      attributes: false,
      childList: true,
      subtree: true,
    },
    () => document.documentElement
  );

  return (
    <Box bg="dark.5">
      <motion.div
        animate={lastMutation ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.1 }}
        style={
          lastMutation
            ? { borderRadius: 'var(--mantine-radius-default', overflow: 'hidden' }
            : { borderRadius: '0' }
        }
      >
        {children}
      </motion.div>
    </Box>
  );
}
