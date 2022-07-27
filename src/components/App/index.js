// == Import
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import CharacterManagement from 'src/components/CharacterManagement';
import Register from 'src/components/Register';
import Login from 'src/components/Login';
import Header from 'src/components/Header';
import HomePage from 'src/components/HomePage';
import Profile from 'src/components/Profile';
import CharactersRace from 'src/components/CharactersRace';
import Footer from 'src/components/Footer';
import CharacterCreation from 'src/components/CharacterCreation';
import Name from 'src/components/CharacterCreation/Name';
import Class from 'src/components/CharacterCreation/Class';
import Race from 'src/components/CharacterCreation/Race';
import Background from 'src/components/CharacterCreation/Background';
import Stats from 'src/components/CharacterCreation/Stats';
import Validate from 'src/components/CharacterCreation/Validate';

import './styles.css';

const theme = createTheme({

  palette: {
    type: 'light',
    primary: {
      main: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff7a00',
    },
    background: {
      paper: '#ffffff',
    },
    error: {
      main: '#ff1200',
    },
    warning: {
      main: '#af15a6',
    },
    info: {
      main: '#0988ec',
    },
    success: {
      main: '#149418',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
    },
  },

  // palette: {
  //   type: 'light',
  //   primary: {
  //     main: grey[900],
  //     // secondary: '#fff',
  //     // dark: grey[900],
  //     // light: grey[900],
  //   },
  //   // secondary controle la couleur des boutons
  //   secondary: {
  //     main: '#000000',
  //   },
  //   // text controle la couleur du texte
  //   text: {
  //     primary: '#fff',
  //     secondary: '#fff',
  //     disabled: '#fff',
  //     // primary: orange[900],
  //     // secondary: orange[900],
  //     // disabled: orange[900],

  //   },
  // },

});

// == Composant
function App() {
  // const { isLogged } = useSelector((state) => state.user);
  return (

    <div className="app">
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/race" element={<CharactersRace />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/characters" element={<CharacterManagement />} />
          <Route path="/creation" element={<CharacterCreation />} />
          <Route path="/creation/name" element={<Name />} />
          <Route path="/creation/class" element={<Class />} />
          <Route path="/creation/race" element={<Race />} />
          <Route path="/creation/background" element={<Background />} />
          <Route path="/creation/stats" element={<Stats />} />
          <Route path="/creation/validate" element={<Validate />} />


        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

// == Export
export default App;
