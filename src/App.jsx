import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Edit from './Components/Edit';
// import Create from './Components/Create';

import './App.css'
// import Error from './Components/Error';
const App = () => {

  

  const [id, setId] = useState(0);

  return (
    <div>


      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/body' element={<Body setId = {setId} />} />
          <Route path='/edit/:id' element={<Edit id ={id} />} />
          {/* <Route path='/create' element={<Create />} /> */}
          {/* <Route path='*' element={<Error />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;