import {
  Alert as MantineAlert,
  AlertProps as MantineAlertProps,
  MantineColor,
  useProps,
} from '@mantine/core';
import {
  IconAlertTriangle,
  IconCircleCheck,
  IconCircleX,
  IconInfoCircle,
} from '@tabler/icons-react';

type AlertType = 'primary' | 'info' | 'success' | 'warning' | 'error';

interface AlertProps extends Pick<MantineAlertProps, 'title' | 'icon' | 'withCloseButton'> {
  type?: AlertType;
  children: React.ReactNode;
}

const defaultProps: Partial<AlertProps> = {
  type: 'primary',
  withCloseButton: false,
};

export function Alert(props: AlertProps) {
  const { type, children, title, withCloseButton } = useProps('Alert', defaultProps, props);

  interface AlertTypeMapping {
    color: MantineColor;
    icon: React.ReactNode;
  }
  /* Type to color and icon mapping */
  const mapping: Record<AlertType, AlertTypeMapping> = {
    primary: { color: 'brand', icon: <IconInfoCircle /> },
    info: { color: 'gray', icon: <IconInfoCircle /> },
    success: { color: 'green', icon: <IconCircleCheck /> },
    warning: { color: 'yellow', icon: <IconAlertTriangle /> },
    error: { color: 'red', icon: <IconCircleX /> },
  };
  return (
    <MantineAlert
      color={mapping[type!].color}
      title={title}
      icon={mapping[type!].icon}
      radius={0}
      withCloseButton={withCloseButton}
      mod={{ type }}
    >
      {children}
    </MantineAlert>
  );
}
