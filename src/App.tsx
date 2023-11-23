import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
//import Home from './components/Home';
// import MainComponent from './components/Datamap';
// import Header from './components/layout';
import Home from './pages/Home';


const App: React.FC = () => {
  const handleSignUp = (formData: { name: string; email: string; password: string }) => {
    console.log('Form Data:', formData);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm onSubmit={handleSignUp} />} />
        <Route path="/Home" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;
