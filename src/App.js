import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
//import axios from 'axios';
import Context from './context';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Favoritos from './views/Favoritos';
import info from './fotos.json'

function App() {
  
  const [data, setData] = useState([]);
  const sharedState = { data, setData }
  //const endpoint = './fotos.json'
  console.log(info)


  return (
    <div className="App">
      <Context.Provider value={sharedState}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Favoritos' element={<Favoritos />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Context.Provider>

    </div>
  );
}

export default App;
