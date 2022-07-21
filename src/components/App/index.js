// == Import
import { Routes, Route } from 'react-router-dom';

import SignUp from 'src/components/SignUp';
import SignIn from 'src/components/SignIn';

import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
