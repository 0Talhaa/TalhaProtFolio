import React from 'react'
import './Works.css'
import Protfolio1 from '../../assets/logo.png'
const Works = () => {
  return (
    <>
      <section id="works">
        <h2 className='workstitle'>My Profile</h2>
        <span className="worksDesc">Lorem ipsum dolor sit amet consectetur.</span>
        <div className="WorksImgs">
            <img src={Protfolio1} alt="" className="worksImg" />
            <img src={Protfolio1} alt="" className="worksImg" />
            <img src={Protfolio1} alt="" className="worksImg" />
            <img src={Protfolio1} alt="" className="worksImg" />
            <img src={Protfolio1} alt="" className="worksImg" />
            <img src={Protfolio1} alt="" className="worksImg" />
        </div>
        <button className="worksBtn">See More</button>
      </section>
    </>
  )
}

export default Works
