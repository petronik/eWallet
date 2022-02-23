import React from 'react';
import RequireAuth from './components/RequireAuth'
import {Routes, Route, Navigate} from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import Overview from './components/Overview/Overview';
import Archive from './components/Archive/Archive';
import Transfers from './components/Transfers/Transfers';
import Account from './components/Account/Account';
import TopUpAccount from './components/Transfers/TopUpAccount/TopUpAccount'
import TopUpSuccess from './components/Transfers/TopUpAccount/TopUpSuccess'
import Withdraw from './components/Transfers/Withdraw';
import SendMoney from './components/Transfers/SendMoney/SendMoney';
import ConfirmTransaction from './components/Transfers/SendMoney/ConfirmTransaction';
import Security from './components/Account/Security/Security';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Layout/> } >
        {/* public routes */}
        <Route index element={<Navigate to="login" />}/>
        <Route  path='login'>
          <Route index element={<Login/>}/>
        </Route>
        <Route path='register' element={<Register />}/>

        {/* protected routes */}
        <Route element={ <RequireAuth /> }>
          <Route path='overview' element={<Overview />}/>
          <Route path='transfers' element={<Transfers />}>
            <Route index element={<Navigate to="topup" />}/>
            <Route  path='topup'>
              <Route index element={<TopUpAccount/>}/>
              <Route  path='success' element={<TopUpSuccess/>}/>
            </Route>
            <Route path='sendmoney'>
              <Route index element={<SendMoney/>}/>
              <Route path='confirmtransaction' element={<ConfirmTransaction/>}/>
            </Route>
            <Route path='withdraw' element={<Withdraw/> }/>
          </Route>
          <Route path='archive' element={<Archive />}/>
          <Route path='account' element={<Account/>}/>
            <Route path='security' element={<Security/> } />
        </Route>
      </Route>
    </Routes>

  );
}

export default App;
