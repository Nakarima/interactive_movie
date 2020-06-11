import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { pink, amber } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: amber,
  },
});

const HomePage = () => (
  <div className="App">
    <div className="App-content">
      <h1>Witaj w naszym filmie o patologii internetowych celebrytów</h1>
      <Button variant="contained" color="primary">
        Zacznij stalkować
        </Button>
    </div>
    <footer className="App-footer">
      Designed and developed by Marcin Puczko
      </footer>
  </div>
);


function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;

