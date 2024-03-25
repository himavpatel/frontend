import React from 'react'
import './info.css'
import Selfie from '../Assets/selfie1.png';
import Navbar from '../Navbar'
import Upload from '../Assets/upload.png';
import Search from '../Assets/skin.jpg';

const Infos = () => {
  return (
    <>
    
        <div className="info">
          <div className="heading">
            <h2>How It Works?</h2>
          </div>
          <div className="detail">
            <div className="f">
              <img src={Selfie} height={'200px'} width={'200px'}></img>
              <h4>Click a pic</h4>
              <h5>Take a picture of your skin</h5>
            </div>

            <div className="s">
              <img src={Upload} height={'200px'} width={'200px'}></img>
              <h4>Upload an image</h4>
               <h5>visit Healing site and upload your image</h5> 
            </div>

            <div className="t">
              <img src={Search} height={'200px'} width={'200px'}></img>
              <h4>Get Final Report</h4>
              <h5>Healing Website analyze your Skin image and display reports for you</h5>
            </div>
          </div>
        </div>
         {/* <div className="Content">
          <h2>Understanding the Background of DrPlant</h2>
          <div className="card-container">
            {cardsData.map((card, index) => (
              <Block key={index} title={card.title} content={card.content} />
            ))}
          </div>

          <p></p>
        </div>  */}
      
    </>
  )
}

export default Infos