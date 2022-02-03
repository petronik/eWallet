import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
