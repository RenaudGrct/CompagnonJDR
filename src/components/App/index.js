// == Import
import { Routes, Route } from 'react-router-dom';

import './styles.css';
import SignIn from '../SignIn';

// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
