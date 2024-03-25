import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Info from './Components/Infos/Infos.js'
import Block from './Components/Block.js'
import Details from './Components/Details/Details.js'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from './Components/Login/Login.js'
import ImageUpload  from './Components/Home/ImageUpload.js';
import ContactUs from './Components/ContactUs/ContactUs.js'


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/infos" element={<Info />}></Route>
          <Route path="/imageupload" element={<ImageUpload />}></Route>
          <Route path="/blocks" element={<Block />}></Route>
          <Route path="/details" element={<Details />}></Route>   
          <Route path="/contactUs" element={<ContactUs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
