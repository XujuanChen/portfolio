import React from 'react'
import './About.css'
import Logos from '../components/Logos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faSquareJs, faReact, faGitAlt, faGithub, faJava, faPython, faBootstrap, faAndroid,  } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faMobileAndroid, faTerminal, faMobileAndroidAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons'


const About = () => {

  return (
    <div className='about-page' id='about' >
      <div>
        <div className='about-left '>
          <div className='image-container'>
            <img className='my-image' src="photo23.jpg" alt="photo"/>
          </div>
          <div className='text-center tp-10'>
            <h2>Xujuan Chen</h2>
            <h3>M.S. in Computer Science</h3>
            <h3 className="op75">from City College of New York</h3>
            <h3>B.S. in Computer Science</h3>
            <h3 className="op75">from Lehman College</h3>
            <h3>Honor: Summa Cum Laude</h3>
          </div>
          <div className='image-container'>
            <img className='my-image' src="degree.avif" alt="photo"/>
          </div>
          <br />
        </div>
      </div>

      <div className='about-right'>
        <h2 className='underline'>My Skills & Tools</h2>
        <br />
        <h3 className='op75'>The skills, tools and technologies I use to bring your products to life:</h3>
        <br />
        <div className='grid-icons'>
          <Logos icon={faHtml5} text='HTML5' />
          <Logos icon={faCss3Alt} text='CSS3' />
          <Logos icon={faBootstrap} text='Bootstrap'/>
          <Logos icon={faSquareJs} text='Javascript' />
          <Logos icon={faPython} text='Python' />
          <Logos icon={faJava} text='Java' />
          <Logos icon={faReact} text='React' />
          <Logos icon={faMobileAndroidAlt} text='Android' />
          <Logos icon={faDatabase} text='SQL' />
          <Logos icon={faGithub} text='Github' />
          <Logos icon={faGitAlt} text='Git' />
          <Logos icon={faTerminal} text='Cmd Line'/>
        </div>

        <br />
      </div>
    </div>
  )
}

export default About