import React from 'react'
import './Socialmedias.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faLinkedin, faInstagram, faTiktok, faYoutube, } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
const Socialmedias = () => {
  return (
    <div className="social-icons">
    <a id='linkedin' href="https://www.linkedin.com/in/joyce-chen-850065144/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a id='github' href="https://github.com/XujuanChen" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
    </a>
    <a id='twitter' href="https://twitter.com/XujuanC" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a id='facebook' href="https://www.facebook.com/profile.php?id=100008634317474" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a id='email' href="mailto:joycuber@gmail.com">
        <FontAwesomeIcon icon={faSquareEnvelope} />
    </a>
    
  </div>
  )
}

export default Socialmedias