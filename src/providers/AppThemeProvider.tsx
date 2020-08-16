import React from 'react'
import { ThemeProvider, createMuiTheme, Theme } from '@material-ui/core/styles'
import { ContextProps } from './AppContextProvider'

const themeProps = {
  palette: {
    primary: {
      main: '#169b1e',
    },
  },
}

const AppThemeProvider: React.FC<ContextProps> = (props) => {
  const theme: Theme = createMuiTheme(themeProps)

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default AppThemeProvider
