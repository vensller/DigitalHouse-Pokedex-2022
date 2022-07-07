import './style.css';
import {BrowserRouter, Route, Routes, Redirect, Navigate} from 'react-router-dom';
import Home from "./pages/Home";
import Legendaries from './pages/Legendaries';
import Legendary from './pages/Legendary';

function App() { 
  return (
    <BrowserRouter>
      <Routes>                 
        <Route path="/legendaries" exact element={<Legendaries />} />
        <Route path="/legendary/:id" exact element={<Legendary />} />

        <Route path="/" element={<Home />}/> 
        <Route path="*" element={<Navigate to="/" /> }/>
      </Routes>
    </BrowserRouter>        
  );
}

export default App;
