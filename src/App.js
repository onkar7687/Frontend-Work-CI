import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import From1 from './components/Forms1';
import HomePage from './components/Homepage';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import './i18n';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} /> {/* Default route */}
        <Route path="/forms" element={<From1 />} /> {/* Corrected from `/froms` */}
        <Route path="/home" element={<Home />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </div>
  );
}

export default App;
