import React from 'react'
import './Home.css'
import Socialmedias from '../components/Socialmedias'


const Home = () => {
  return (
    <div className='home-page' >
        <div className='home-section'>

            <h1 className='home-touch'>Xujuan Chen</h1>
            <h2 className="op75">Software Engineer</h2>

            <h3 className='introduction home-touch'>
                I'm <span className='chen'>Xujuan Chen</span>, my preferred name is Joyce.
                I am a software engineer / web developer live in Bronx, New York. I love building beautiful interfaces, web apps, and everything in between!
            </h3>
            <h3 className='home-title'>Get in touch💟<a href="mailto:joycuber@gmail.com"><span className='mail-link underline'>joycuber@gmail.com</span></a>  </h3>
            <Socialmedias />
        </div>
        <div className='home-img-container'>
            <img className='home-image' src="photo-16.avif" alt="coding" />
        </div>

    </div>
  )
}

export default Home