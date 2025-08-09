import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css'
import NavBar from './components/NavBar'
import LandingPage from './components/Landing'
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: { main: '#4000ff', contrastText: '#e9e9e9ff' },
        secondary: { main: '#0f93b1ff' },
      },
    },
    light: {
      palette: {
        primary: { main: '#e9e9e9ff', contrastText: '#494949ff' },
        secondary: { main: '#005533' },

      },
    },
  },
});

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <LandingPage />
    </ThemeProvider>

  );
}