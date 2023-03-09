import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
//import axios from 'axios';
import FotosContext from './context';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Favoritos from './views/Favoritos';
import info from './fotos.json'

function App() {
  
  const [data, setData] = useState([info.photos]);
  //const sharedState = { data, setData }
  //const endpoint = './fotos.json'
  //console.log(info)


  return (
    <div className="App">
      <FotosContext.Provider value={{ data, setData }}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Favoritos' element={<Favoritos />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </FotosContext.Provider>

    </div>
  );
}

export default App;
