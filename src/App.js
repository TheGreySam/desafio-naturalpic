import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Favoritos from './views/Favoritos';

function App() {
  
  const [data, setData] = useState("");
  useEffect(() => {
    const fotoinfo = async () => {
      const endpoint = await axios(
        "/fotos.json"
        );
      const info = endpoint.data
    setData([...info])
    };
    fotoinfo();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar> 
      <Routes>
      <Route path='/' element={<Home lista={data} />} />
      <Route path='Favoritos' element={<Favoritos lista={data}/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
