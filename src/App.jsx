import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Components/Client/SignUp/SignUp';
import AccountHolder from './Components/Client/SignUp/AccountHolder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path='/accountholder' element={<AccountHolder/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
