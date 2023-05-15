import React from 'react';
import Legal from './components/Legal';
import Privacy from './components/Privacy';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Routes>
            <Route path='/' element={<Legal />} />
            <Route path='/Privacy' element={<Privacy />} />
        </Routes>
    </div>
  );
}

export default App;
