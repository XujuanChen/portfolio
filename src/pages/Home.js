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
                I am a software engineer / web developer live in Bronx, New York. 
                <br />
                I have a Master's degree in Computer Science from City College of New York, and a Bachelor's degree in Computer Science from Lehman College.
            </h3>

            <h3 className='introduction home-touch'>
                I love building beautiful interfaces, web apps, and everything in between!
                Please feel free to reach out and say hello! I promise I don't bite. 😽
            </h3>
            <h3 className='home-title'><a href="mailto:joycuber@gmail.com"><span className='mail-link underline'>Get in touch ✉</span></a>  </h3>
            <Socialmedias />
            
        </div>
        <div className='home-img-container'>
            <img className='home-image' src="photo-16.avif" alt="coding" />
        </div>

    </div>
  )
}

export default Home