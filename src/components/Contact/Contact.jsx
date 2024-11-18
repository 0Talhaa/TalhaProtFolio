import React from 'react'
import clint from '../../assets/logo.png'
import  './Contact.css'

const Contact = () => {
  return (
    <>
    <section id="contactPage">
        <div id="clints">
            <h1 className="contactPageTitle">My Clints </h1>
            <p className="clintDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sed vitae. Dolor, voluptatem! Veritatis aliquam nam atque inventore, magni ad.
            </p>
            <div className="clintImgs">
                <img src={clint} alt="clint" className="clintImg" />
                <img src={clint} alt="clint" className="clintImg" />
                <img src={clint} alt="clint" className="clintImg" />
                <img src={clint} alt="clint" className="clintImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">
                Contact Me 
            </h1>
            <span className="contactDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
            <form className='contactForm' id='ContactUs'>
                <input type="text" className="name" placeholder='Your Name'/>
                <input type="email" className="email" placeholder='Your Email'/>
                <textarea className='msg' name="message" rows="5" id="" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Send</button>
                <div className="Links">
                    <img src="" alt="" className="link" />
                    <img src="" alt="" className="link" />
                    <img src="" alt="" className="link" />
                    <img src="" alt="" className="link" />
                </div>
            </form>
        </div>
    </section>
    </>
  )
}

export default Contact
