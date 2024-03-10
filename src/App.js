import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/navbar';
import Dashboard from './components/Dasboard/dashboard.jsx';
import TableView from './components/tableview.jsx';
import Recordview from './components/recordview.jsx';
import LoginPage from './components/login.jsx';
import SignUp from './components/signup.jsx';
import User from './components/user.jsx';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        {isLoggedIn && <Navbar onLogout={handleLogout} />}
        <Routes>
          <Route path='/login' element={isLoggedIn?<Dashboard/>:<LoginPage isAuthenticated={isLoggedIn} setIsAuthenticated={setIsLoggedIn} />} />
          <Route exact path='/' element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path='/data' element={isLoggedIn ? <TableView /> : <Navigate to="/login" />} />
          <Route path='/RecordView/:id' element={isLoggedIn ? <Recordview /> : <Navigate to="/login" />} />
          <Route path='/user' element={isLoggedIn ? <User /> : <Navigate to="/login" />} />
          <Route path='/signup'element={<SignUp/>}/>
        </Routes>
      </div>
    </Router>
    

  );
}

export default App;
