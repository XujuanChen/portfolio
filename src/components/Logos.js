import React from 'react'
import './Logos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'


const Logos = (props) => {
    return (
    <div className='logo-container'>
        <div className='skill-logos'>
            <FontAwesomeIcon icon={props.icon} /> 
        </div>
        <h3 className='mc'>{props.text}</h3>
    </div>
    )
}

export default Logos