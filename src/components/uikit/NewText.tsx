import { Text, TextProps } from '@mantine/core';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

interface NewTextProps extends TextProps {
  children?: React.ReactNode;
}

const NewText = forwardRef<HTMLParagraphElement, NewTextProps>((props, ref) => {
  const { children, ...others } = props;
  return (
    <Text ref={ref} {...others}>
      {children}
    </Text>
  );
});

export default motion(NewText);
