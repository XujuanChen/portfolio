import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import './Arrow.css'

const Arrow = () => {
  return (
    <div>
        <a className= {`nav-link top-link`} href='#home'>
            <FontAwesomeIcon icon={faArrowUp} />
        </a>
    </div>
  )
}

export default Arrow