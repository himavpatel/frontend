import React from 'react'
import ImageUpload from './ImageUpload'
import './Home.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Disease from './Disease'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'
import Info from '../Infos/Infos'
import Details from '../Details/Details'
import image from "../Assets/hospital.webp"; 

const Home = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <Navbar />
      <div className='main' style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" ,height:"680px", width:"1518px"}}>
        </div>
        <hr class="white-hr"></hr>
        <div>
         <nav>
            <button className="button" onClick={()=> navigate ("/Infos")}>How It's Works?</button>
        
            <button className="button" onClick={()=> navigate ("/Details")}>Types of Skin Diseases</button>
        </nav>
        </div>
        <hr class="white-hr"></hr>
        <div>
        <div className="Image">
          <h3>Insert Your Image Here..</h3>
          <ImageUpload />
        </div>
       
       
      </div>
    </>
  )
}

export default Home