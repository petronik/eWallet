import React from 'react';
// import RequireAuth from './components/RequireAuth'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import Overview from './components/Overview/Overview';
import Archive from './components/Archive/Archive';
import Transfers from './components/Transfers/Transfers';
import Account from './components/Account/Account';
import TopUpAccount from './components/Transfers/TopUpAccount'
// import TopUpSuccess from './components/Transfers/TopUpSuccess'
import Withdraw from './components/Transfers/Withdraw';
import SendMoney from './components/Transfers/SendMoney';


function App() {
  return (

    <Routes>
      <Route path='/' element={ <Layout/> } >
        {/* public routes */}
        <Route index element={<Login/>}/>
        <Route path='register' element={<Register />}/>

        {/* protected routes */}
        {/* <Route element={ <RequireAuth /> }> */}
          <Route path='overview' element={<Overview />}/>
          <Route path='transfers' element={<Transfers />}>
            <Route path='topupcard' element={<TopUpAccount/>}/>
            {/* <Route path='topusuccess' element={<TopUpSuccess/>}/> */}
            <Route path='sendmoney' element={<SendMoney/>}/>
            <Route path='withdraw' element={<Withdraw/> }/>
          <Route/>
          </Route>
          <Route path='archive' element={<Archive />}/>
          <Route path='account' element={<Account/>}/>
      </Route>
    </Routes>

  );
}

export default App;
