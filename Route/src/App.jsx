import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Welcome from './components/Welcome'


function App() {
  

  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/:param/" element={ <Welcome/>} />
    <Route path="/:param/:textColor/:BGcolor" element={ <Welcome/>} />

    </Routes>
  </BrowserRouter>
);
}
export default App
