// == Import
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import CharacterManagement from 'src/components/CharacterManagement';
import Register from 'src/components/Register';
import Login from 'src/components/Login';
import Header from 'src/components/Header';
import HomePage from 'src/components/HomePage';
import Profile from 'src/components/Profile';
import Footer from 'src/components/Footer';
import CharacterCreation from 'src/components/CharacterCreation';
import Name from 'src/components/CharacterCreation/Name';
import Class from 'src/components/CharacterCreation/Class';
import Race from 'src/components/CharacterCreation/Race';
import Background from 'src/components/CharacterCreation/Background';
import Stats from 'src/components/CharacterCreation/Stats';
import Validate from 'src/components/CharacterCreation/Validate';
import Avatar from 'src/components/CharacterCreation/Name/Avatar';
import Character from 'src/components/Character';
import CharacterEquipment from 'src/components/Character/Equipment';
import CharacterProficiencies from 'src/components/Character/Proficiencies';
import CharacterHistory from 'src/components/Character/History';

import TestComponent2 from 'src/components/TestComponent2';
import TestComponent from 'src/components/TestComponent';

import './styles.css';

import { retrieveUserDataFromLocalStorage, getUserProfile } from 'src/actions/user';

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
    // text: {
    //   primary: 'rgba(255,255,255,0.87)',
    // },
  },
});

// == Composant
function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   const userId = localStorage.getItem('userId');
  //   const guest = localStorage.getItem('guest');

  //   // if (token && userId && guest) {
  //   //   dispatch(getUserProfile());
  //   //   // coder une autre methode pour le guest
  //   //   dispatch(retrieveUserDataFromLocalStorage(token, userId));
  //   //   console.log('je suis le guest');
  //   // }

  //   if (token && userId) {
  //     dispatch(getUserProfile());
  //     dispatch(retrieveUserDataFromLocalStorage(token, userId));
  //     console.log('je suis le user');
  //   }
  // }, []);

  useEffect(() => {
    if (localStorage.getItem('token') && localStorage.getItem('userId')) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      // dispatch(verifyToken(token, userId));
      dispatch(retrieveUserDataFromLocalStorage(token, userId));
      dispatch(getUserProfile());
      // dispatch(isLogged());
    }
  }, []);

  return (

    <div className="app">
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
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
          <Route path="/creation/avatar" element={<Avatar />} />
          <Route path="/character/" element={<Character />} />
          <Route path="/character/equipment" element={<CharacterEquipment />} />
          <Route path="/character/proficiencies" element={<CharacterProficiencies />} />
          <Route path="/character/history" element={<CharacterHistory />} />

          <Route path="/tests" element={<TestComponent2 />} />

        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

// == Export
export default App;
