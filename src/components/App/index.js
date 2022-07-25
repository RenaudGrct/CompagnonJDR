// == Import
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import CharacterManagement from 'src/components/CharacterManagement';
import Register from 'src/components/Register';
import Login from 'src/components/Login';
import Header from 'src/components/Header';
import HomePage from 'src/components/HomePage';
import Profile from 'src/components/Profile';
import TestComponent from 'src/components/TestComponent';
import Footer from 'src/components/Footer';

import './styles.css';

const theme = createTheme({

  palette: {
    type: 'light',
    primary: {
      main: grey[900],
      // secondary: '#fff',
      // dark: grey[900],
      // light: grey[900],
    },
    // secondary controle la couleur des boutons
    secondary: {
      main: '#000000',
    },
    // text controle la couleur du texte
    text: {
      primary: '#fff',
      secondary: '#fff',
      disabled: '#fff',
      // primary: orange[900],
      // secondary: orange[900],
      // disabled: orange[900],

    },
  },

});

// == Composant
function App() {
  return (

    <div className="app">
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/test" element={<TestComponent />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/character-management" element={<CharacterManagement />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

// == Export
export default App;
