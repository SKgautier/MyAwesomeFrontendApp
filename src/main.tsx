import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, CssBaseline, Theme, ThemeProvider } from '@mui/material'

const theme : Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#18206fff',
    },
    secondary: {
      main: "#17255aff"
    },
    error: {
      main: "#bd1e1eff"
    },
    warning: {
      main: "#d88373f"
    },
    info: {
      main: "#f5e2c8ff"
    },
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
)
