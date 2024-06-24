# Customize Mantine Theme for TiDB UI Kit

This is a memo for customizing the Mantine v7 theme for TiDB UI Kit.

## Test in Storybook

```bash
pnpm run storybook
```

## Overriding Theme object

> src: [src/theme/index.ts](/src/theme/index.ts)

First choice is to override the [default theme object](https://mantine.dev/theming/theme-object/). For those global behavior changes that are required by TiDB UI, such as font family, font size, colors, etc.

### Colors

> src: [src/theme/colors.ts](/src/theme/colors.ts)

Color palettes are based on the TiDB Design System color variables defined in Figma. And for light and dark mode of each color, we use a different set of colors, therefore, we use [virtual colors](https://mantine.dev/theming/colors/#virtual-colors).

## CSS variables resolver

> src: [src/theme/resolver.ts](/src/theme/resolver.ts)

The [`cssVariablesResolver`](https://mantine.dev/styles/css-variables/#css-variables-resolver) is used to override the default [css variables](https://mantine.dev/styles/css-variables-list/) so that the components can use these new values without double definition in separate files.

## Customize Mantine components

> src: [src/theme/components](/src/theme/components)

If we feel the need to customize the look and feel of Mantine components, we can do so by overriding the default props of the Mantine components. We can do this by creating a new file in the `src/theme/components` folder and exporting the new props.

## New components based on Mantine components

> src: [src/components/uikit](/src/components/uikit)

If customization of Mantine components look and feel is not enough, you can create new components based on Mantine components. `src/components/uikit` folder contains those new components.

- Use [`mod` prop](https://mantine.dev/styles/data-attributes/#mod-prop) to add simple data attributes to the original Mantine component. Example: [`<Alert />`](/src/components/uikit/Alert.tsx)
- Use [`useProps` hook](https://mantine.dev/theming/default-props/) to add default props to the custom component.
