import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Favoritos from './views/Favoritos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar> 
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='Favoritos' element={<Favoritos/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
