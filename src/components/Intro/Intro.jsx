import React from 'react'
import './intro.css';
import bg from '../../assets/image.jpg';
// import btnImg from '../../assets/btnImg';
import {Link} from 'react-scroll';
// import btnImg from '../../assets..hiremi.png'
const Intro = () => {
    return (
        <>
            <section id='intro'>
                <div className="introContent">
                    <span className="hello">Hello,</span>
                    <span className="introText">I'm <span className="introName">Talha</span><br/>Software Engineer</span>
                    <p className="introPara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ratione unde, vero quas facere <br />soluta excepturi deleniti laudantium nemo recusandae at commodi eligendi?</p>
                    <Link><button className="btn"><img src="{btnImg}" alt="hire" className='btnImg'/>Hire Mi</button></Link>
                </div>
                <img src="{bg}" alt="Profile" className="bg" />

            </section>
        </>
    )
}

export default Intro
