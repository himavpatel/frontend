import React, { useState } from 'react'
import Navbar from './Navbar'
//import './Block.css'

const Block = ({ title, content }) => {
  return (
    <>
    <Navbar/>
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
    </>
  )
}

export default Block