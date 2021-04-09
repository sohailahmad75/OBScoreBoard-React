import React from 'react'
import {ThemeProvider} from 'styled-components';
import {Dashboard} from './containers/Dashboard';
import {GlobalStyles} from './styles/global';
import {darkTheme, lightTheme} from './styles/theme';
import './styles/styles.scss'
const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles/>
      <Dashboard/>
    </ThemeProvider>
  )
}

export default App;
