import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Info from './Components/Infos/Infos.js'
import Block from './Components/Block.js'
import Disease from './Components/Home/Disease.js'
import Details from './Components/Details/Details.js'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import About from './Components/About/About.js'
import ContactUs from './Components/ContactUs/ContactUs.js'
import Services from './Components/Services/Services'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Infos" element={<Info />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Block" element={<Block />}></Route>
          <Route path="/Details" element={<Details />}></Route>
          <Route path="/Disease" element={<Disease />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/Services" element={<Services />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
