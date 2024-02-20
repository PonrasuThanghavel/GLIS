import React from 'react';
// import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './components/Dasboard/dashboard.jsx';
import TableView from './components/tableview.jsx';
import Recordview from './components/recordview.jsx';

function App() {
  return (
    <Router>
    <div>
          <Navbar/>
            <Routes>
              <Route exact path='/' element={<Dashboard/>}/>
              <Route path='/data' element={<TableView/>}/>
              <Route path='/RecordView/:id' element={<Recordview/>}/>
            </Routes>
          {/* <Recordview/> */}
    </div>
    </Router>
  );
}

export default App;
