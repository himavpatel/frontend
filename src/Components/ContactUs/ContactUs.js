import React from 'react'
import Navbar from '../Navbar'
import './contact.css'
export default function ContactUs() {
  return (
    <>
     <Navbar />
      <section class="contact-area" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="contact-content text-center">
                        <h1>HEALING</h1>
                        <p>"Revolutionize patient care with our HEALING System for Skin Disease Prediction, offering advanced diagnostic tools and streamlined workflows for accurate and efficient skin disease detection and treatment." </p>
                        <div class="hr"></div>
                        <h6>DDU, Nadiad, Gujarat.</h6>
                        <h6>+01 2345 6789 12<span>|</span>+01 2345 6789 12</h6>
                        <div class="contact-social">
                            <ul>
                                <li><a class="hover-target" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-github"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-twitter"></i></a></li>
                                {/* <li><a class="hover-target" href=""><i class="fab fa-behance"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-pinterest-p"></i></a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <footer>
        <p>Copyright &copy; 2019 </p> 
        <p>All Rights Reserved.</p>
    </footer>
    </>
  );
  
}