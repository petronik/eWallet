import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import Overview from './components/Overview/Overview';
import Archive from './components/Archive/Archive';
import Transfers from './components/Transfers/Transfers';
import Account from './components/Account/Account'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/overview' element={<Overview/>}/>
        <Route path='/transfers' element={<Transfers/>}/>
        <Route path='/archive' element={<Archive/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
