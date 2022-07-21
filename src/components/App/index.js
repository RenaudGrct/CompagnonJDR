// == Import
import { Routes, Route } from 'react-router-dom';

import Register from 'src/components/Register';
import Login from 'src/components/Login';
import HomePage from 'src/components/HomePage';

import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
