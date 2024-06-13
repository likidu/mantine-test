import {
  Alert as MantineAlert,
  AlertProps as MantineAlertProps,
  MantineColor,
} from '@mantine/core';
import {
  IconAlertTriangle,
  IconCircleCheck,
  IconCircleX,
  IconInfoCircle,
} from '@tabler/icons-react';

type AlertType = 'primary' | 'info' | 'success' | 'warning' | 'error';

interface AlertProps extends Pick<MantineAlertProps, 'title' | 'icon'> {
  type?: AlertType;
  children: React.ReactNode;
}

export function Alert({ type = 'primary', children, title }: AlertProps) {
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
      color={mapping[type].color}
      title={title}
      icon={mapping[type].icon}
      radius={0}
      mod={{ type }}
    >
      {children}
    </MantineAlert>
  );
}
