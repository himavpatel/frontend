import React from 'react'
import ImageUpload from './ImageUpload'
import './Home.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'
import image from "../Assets/958470.jpg"; 
import Infos from '../Infos/Infos'

const Home = () => {
  const navigate = useNavigate() 
  
  return (
    <>
      <Navbar />
      <div className='main' style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" ,height:"680px", width:"1518px"}}>
        </div>
          <hr class="white-hr"></hr>
        <div>
          <div className="Image">
          <Infos />
          </div> 
        </div> 
        <hr class="white-hr"></hr>
        <div>
         <nav>
            <button className="button" onClick={()=> navigate ("/ImageUpload")}>Image Upload and Predictions</button>
            <button className="button" onClick={()=> navigate ("/Details")}>Types of Skin Diseases</button>
        </nav>
        </div>
        <hr class="white-hr"></hr>
        <footer class="footer py-4 mt-5">
          <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
            <div class="col-lg-4 my-3 my-lg-0">
                <a class="btn btn-back btn-social mx-2" href="#!">
                  <i class="fab fa-twitter"></i></a>
                <a class="btn btn-back btn-social mx-2" href="#!">
                  <i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-back btn-social mx-2" href="#!">
                  <i class="fab fa-linkedin-in"></i></a>
                <a class="btn btn-back btn-social mx-2" href="#!">
                  <i class="fab fa-github"></i></a>
            </div>
            <div class="col-lg-4 text-lg-right">
              <a class="mr-3 text" href="#!">Privacy Policy</a>
              <a href="#!"class="text">Terms of Use</a></div>
          </div>
          </div>
        </footer>
    </>
  )
}

export default Home