import React from 'react'
import {
  ThemeProvider,
  createMuiTheme,
  Theme,
  useTheme,
} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { ContextProps } from './AppContextProvider'

type BreakpointOrNull = Breakpoint | null

export const hex2rgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

const themeProps = {
  palette: {
    primary: {
      main: '#169b1e',
    },
    secondary: {
      main: '#7A28CB',
      // main: '#F1C40F',
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
  },
}

export function useWidth() {
  const theme: Theme = useTheme()
  const keys: Breakpoint[] = [...theme.breakpoints.keys].reverse()
  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key))
      return !output && matches ? key : output
    }, null) || 'xs'
  )
}

const AppThemeProvider: React.FC<ContextProps> = (props) => {
  const theme: Theme = createMuiTheme(themeProps)

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default AppThemeProvider
