import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login_impormation/Login/Login';
import Register from './Pages/Login_impormation/Register/Register';
import NotFound from './Pages/NotFound/NotFound';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;