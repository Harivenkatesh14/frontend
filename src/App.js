import React from 'react';
import Navbar from './components/Navbar'; // Updated Navbar import path
import HomePage from './pages/HomePage'; // Updated HomePage import path
import reportWebVitals from './reportWebVitals'; // Updated reportWebVitals import path

const App = () => {
  return (
    <div className="App">
      <Navbar /> {/* Render Navbar */}
      <HomePage /> {/* Render HomePage */}
    </div>
  );
};

export default App;
