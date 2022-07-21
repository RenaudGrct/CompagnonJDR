// == Import
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange, deepPurple } from '@mui/material/colors';

import Register from 'src/components/Register';
import Login from 'src/components/Login';
import HomePage from 'src/components/HomePage';
import Profile from 'src/components/Profile';
import TestComponent from 'src/components/TestComponent';

import './styles.css';

const theme = createTheme({

  palette: {
    primary: {
      main: orange[500],
      dark: deepPurple[900],

    },
  },
});

// == Composant
function App() {
  return (

    <div className="app">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/test" element={<TestComponent />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

// == Export
export default App;
