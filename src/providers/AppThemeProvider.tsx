import React from 'react';
import {
  ThemeProvider,
  createMuiTheme,
  Theme,
  useTheme,
} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { ContextProps } from './AppContextProvider';

type BreakpointOrNull = Breakpoint | null;

export const hex2rgb = (hex: string): Record<string, number> | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
};

export const green = '#169B1E';
export const purple = '#7A28CB';
export const red = '#A30015';
export const gold = '#F1C40F';
export const darkGold = '#D4AC0C';
export const lightGold = '#F8E28B';
export const lightPurple = '#8F44DA'
export const darkPurple = '#290025';
export const darkGreen = '#006400';
export const deepGreen = '#008001';
export const brightGreen = '#2BAB27';

const themeProps = {
  palette: {
    type: "dark" as const,
    primary: {
      main: green,
    },
    secondary: {
      main: purple,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  overrides: {
    MuiStepper: {
      horizontal: {
        backgroundColor: 'transparent',
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: -8,
        marginRight: -8,
      },
    },
    MuiAccordionSummary: {
      content: {
        margin: '0!important',
      },
    },
    MuiAccordion: {
      root: {
        margin: '0!important',
      },
    },
  },
};

export function useWidth(): 'xs' | 'sm' | 'md' | 'lg' | 'xl' {
  const theme: Theme = useTheme();
  const keys: Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

const AppThemeProvider: React.FC<ContextProps> = (props) => {
  const theme: Theme = createMuiTheme(themeProps);

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default AppThemeProvider;
