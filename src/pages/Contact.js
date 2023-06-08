import React, { useRef, useState, useEffect } from 'react'
import './Contact.css'
import '../App.css'
import emailjs from '@emailjs/browser'
import Arrow from '../components/Arrow';
import { MapContainer, TileLayer, useMap, Marker,Popup } from 'react-leaflet'
import Socialmedias from '../components/Socialmedias'


const Contact = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  }
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setShow(false)
    },5000)
    return () => {
      clearTimeout(timeout);
    }
  },[])
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zcvs569', 'template_qvsogyk', form.current, 'CRH5JsseuTAwXAEos')
      .then((result) => {
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='tp-10' id='contact'>
      <h2 className='underline background-light'> Contact <span className='op75'>✉</span>  </h2>
    <div className='contact-page' >
        <div className='left-container tp-15'>
          <h2>Send Message:</h2>
        <br />
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label>Name</label>
              <input className='forminput' type="text" name="name" />
            </div>
            <div>
              <label>Email</label>
              <input className='forminput' type="email" name="email" />
            </div>
            <div>
              <label>Message</label>
              <textarea className='forminput textheight' name="message" placeholder="Write message..." />
            </div>
            <input className='submit-btn' type="submit" value="Send" onClick={handleClick} />
            <br />
            <p>{ show ? 'Thank You! I will reply your email ASAP.' : null }</p>
          </form>

        </div>
        <div className='left-container'>

        <div className='map-container'>
        <h3 className='ml op75 ft'>My Location: Bronx, New York</h3>
        <MapContainer center={[40.8448, -73.8648]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[40.8448, -73.8648]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        </div>
        <div className='social-icons-container'>
            <Socialmedias />
        </div>
        </div>

        <Arrow />
    </div>
    </div>
  )
}

export default Contact