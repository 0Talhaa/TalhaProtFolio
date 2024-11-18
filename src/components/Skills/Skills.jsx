import React from 'react'
import './Skills.css'
import UIdesign from '../../assets/logo.png';
import Webdesign from '../../assets/logo.png';
import AppDesign from '../../assets/logo.png';
const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I Do</span>
            <span className="skillDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, inventore! Repudiandae tenetur debitis porro hic natus sint esse ab iusto assumenda explicabo.</span>


            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIdesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                      <h2>Lorem, ipsum dolor.</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, laborum?</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={Webdesign}  alt="" className="skillBarImg" />
                    <div className="skillBarText">
                      <h2>Lorem, ipsum.</h2>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, in.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={AppDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                      <h2>Lorem, ipsum.</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, unde.</p>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Skills
