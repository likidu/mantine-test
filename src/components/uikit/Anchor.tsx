import {
  Flex,
  Anchor as MantineAnchor,
  AnchorProps as MantineAnchorProps,
  MantineColor,
  Space,
  useProps,
} from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

type AnchorType = 'primary' | 'text';

interface AnchorProps extends MantineAnchorProps {
  type?: AnchorType;
  isExternal?: boolean;
  children: React.ReactNode;
}

const defaultProps: Partial<AnchorProps> = {
  type: 'primary',
  isExternal: false,
};

export function Anchor(props: AnchorProps) {
  const { type, isExternal, children, c, size, ...others } = useProps(
    'Anchor',
    defaultProps,
    props
  );

  const mapping: Record<AnchorType, MantineColor> = {
    primary: 'brand',
    text: 'gray',
  };

  return (
    <Flex align="center" display="inline-flex">
      <MantineAnchor
        c={mapping[type!]}
        size={size}
        {...others}
        target={isExternal ? '_blank' : '_self'}
      >
        {children}
      </MantineAnchor>
      {isExternal && (
        <>
          <Space w="xs" />
          <IconExternalLink
            color={`var(--mantine-color-${mapping[type!]}-filled)`}
            size={size === 'sm' ? 12 : 16}
          />
        </>
      )}
    </Flex>
  );
}
