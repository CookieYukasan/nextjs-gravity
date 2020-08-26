import { theme, DefaultTheme } from '@chakra-ui/core';

const breakpoints = ['360px', '768px', '1024px', '1440px'];

const customTheme: DefaultTheme = {
  ...theme,
  fontSizes: {
    ...theme.fontSizes,
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
  },
  fonts: {
    body: 'SF Pro Display Regular, system-ui, sans-serif',
    heading: 'SF Pro Display Regular, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },
  colors: {
    ...theme.colors,
    purple: {
      ...theme.colors.purple,
      500: '#8257e5',
    },
    gray: {
      ...theme.colors.gray,
      300: '#e1e1e6',
      600: '#29292e',
      700: '#202024',
      800: '#121214',
    },
  },
};

export default customTheme;
