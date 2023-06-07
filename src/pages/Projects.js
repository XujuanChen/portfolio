import React from 'react'
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  return (
    <div className='projects-container' id='projects'>
      <h2 className='underline background-blue'>Web Development Projects <FontAwesomeIcon icon={faBriefcase} /> </h2>

      {/*project 1  */}
      <div className='projects-page' >
        <div>
          <img className='pj-image' src="0.png" alt="" />
        </div>
        <div className='pj-right'>
          <p> Jan 2023 - May 2023 </p>
          <h2 className='underline'>HobbyHub – ReactJS Full-Stack Project	 </h2>
            <br />
            <h3 className='op75'>HobbyHub is a full-stack website that allows users to create posts and see a feed of them on the home page, edit, delete, or leave comments/images underneath them for discussions, and give upvotes for posts that they like. </h3>
          <br />
          <h3>Skills</h3>
          <div>
            <button className='skill-btn'>HTML5</button> 
            <button className='skill-btn'>CSS3</button> 
            <button className='skill-btn'>JavaScript</button> 
            <button className='skill-btn'>React</button> 
            <button className='skill-btn'>Supabase</button> 
            <button className='skill-btn'>CRUD</button> 
            <button className='skill-btn'>React Router DOM</button> 
          </div>
          <br />
          <h3>Website:</h3>
          <p className='pj-link'>
            <a href="https://lucent-praline-946a75.netlify.app/" target='_blank'>https://lucent-praline-946a75.netlify.app/</a>
          </p>
          <p> <span><b> login account: </b>  </span> joycuber@gmail.com  & <span> <b> password: </b>  </span> 123456  </p>
          <br />
          <h3>Github</h3>
          <p className='pj-link' >
            <a href="https://github.com/XujuanChen/venivici" target='_blank'>https://github.com/XujuanChen/venivici</a>
          </p>
          <br />
          <h3>Video Walkthrough:</h3>
          <p className='pj-link'>
            <a href="https://github.com/XujuanChen/HobbyHub/blob/master/hobbyhub3.gif" target='_blank'>https://github.com/XujuanChen/HobbyHub/blob/master/hobbyhub3.gif</a>
          </p>
          <br />
        </div>
      </div>
      {/*  */}

      {/*project 2  */}
      <div className='projects-page' >
        <div>
          <img className='pj-image' src="2.png" alt="" />
        </div>
        <div className='pj-right'>
          <p> Jan 2023 - May 2023 </p>
          <h2 className='underline'> Veni Vici – ReactJS API project  </h2>
            <br />
            <h3 className='op75'>
            The Web App allows users to discover new things by clicking through random new stuff. It displays one element at a time with information through API calls in a random fashion. The user can influence what they want to see next via a ban list.
            </h3>
          <br />
          <h3>Skills</h3>
          <div>
            <button className='skill-btn'>HTML5</button> 
            <button className='skill-btn'>CSS3</button> 
            <button className='skill-btn'>JavaScript</button> 
            <button className='skill-btn'>React</button> 
            <button className='skill-btn'>REST API</button> 
          </div>
          <br />
          <h3>Website:</h3>
          <p className='pj-link'>
            <a href="https://bejewelled-torte-1fd326.netlify.app/" target='_blank'>hhttps://bejewelled-torte-1fd326.netlify.app/</a>
          </p>
          <br />
          <h3>Github</h3>
          <p className='pj-link'>
            <a href="https://github.com/XujuanChen/venivici" target='_blank'>https://github.com/XujuanChen/venivici</a>
          </p>
          <br />
          <h3>Video Walkthrough:</h3>
          <p className='pj-link'>
            <a href="https://github.com/XujuanChen/venivici/blob/master/vinivici3.gif" target='_blank'>https://github.com/XujuanChen/venivici/blob/master/vinivici3.gif</a>
          </p>
          <br />
        </div>
      </div>
      {/*  */}

      {/*project 3  */}
      <div className='projects-page' >
        <div>
          <img className='pj-image' src="3.png" alt="" />
        </div>
        <div className='pj-right'>
          <p> Jan 2023 - May 2023 </p>
          <h2 className='underline'> Flashcards – ReactJS Front-End Project	 </h2>
            <br />
            <h3 className='op75'>
            Users can use flashcards to study, learn something new, or play a guessing game. It allows users to enter an answer with exact or fuzzy matching and move backward and forward through the list of cards.
            </h3>
          <br />
          <h3>Skills</h3>
          <div>
            <button className='skill-btn'>HTML5</button> 
            <button className='skill-btn'>CSS3</button> 
            <button className='skill-btn'>JavaScript</button> 
            <button className='skill-btn'>React</button> 
            <button className='skill-btn'>React Hooks</button> 

          </div>
          <br />
          <h3>Website:</h3>
          <p className='pj-link'>
            <a href="https://loquacious-cannoli-b656ab.netlify.app/" target='_blank'>https://loquacious-cannoli-b656ab.netlify.app/</a>
          </p>
          <br />
          <h3>Github</h3>
          <p className='pj-link'>
            <a href=" https://github.com/XujuanChen/flashcards" target='_blank'>  https://github.com/XujuanChen/flashcards  </a>
          </p>
          <br />
          <h3>Video Walkthrough:</h3>
          <p className='pj-link'>
            <a href="https://github.com/XujuanChen/flashcards/blob/master/flashcardsForm2.gif" target='_blank'> https://github.com/XujuanChen/flashcards/blob/master/flashcardsForm2.gif </a>
          </p>
          <br />
        </div>
      </div>
      {/*  */}

      <h2 className='underline background-blue'>Computer Vision Projects <FontAwesomeIcon icon={faBriefcase} /> </h2>

            {/*project 4  */}
            <div className='projects-page ' id='projects'>
        <div>
          <img className='pj-image' src="4.png" alt="" />
        </div>
        <div className='pj-right'>
          <p> Jan 2023 - May 2023 </p>
          <h2 className='underline'> Traffic Monitor - Computer Vision Project	 </h2>
            <br />
            <h3 className='op75'>
              The project is on designing intelligent sensors by YOLOv8 object detection. It detects vehicles and tracks them by assigned id. When traffic congestion occurs, it will be reported on the screen.
            </h3>
          <br />
          <h3>Skills</h3>
          <div>
            <button className='skill-btn'>Python OpenCV</button> 
            <button className='skill-btn'>YOLOv8</button> 
            <button className='skill-btn'>Machine Learning</button> 
            <button className='skill-btn'>Computer Vision</button> 
            <button className='skill-btn'>Image Processing</button> 
            <button className='skill-btn'>Artificial Intelligent</button> 
          </div>
          <br />
          
          <h3>Github</h3>
          <p className='pj-link'>
            <a href="https://github.com/XujuanChen/traffic-monitor" target='_blank'>  https://github.com/XujuanChen/traffic-monitor </a>
          </p>
          <br />
          <h3>Video Walkthrough:</h3>
          <p className='pj-link'>
            <a href="https://github.com/XujuanChen/traffic-monitor/blob/master/congenstion.gif" target='_blank'> https://github.com/XujuanChen/traffic-monitor/blob/master/congenstion.gif </a>
          </p>
          <br />

        </div>
      </div>
      {/*  */}

      {/*project 5  */}
      <div className='projects-page ' id='projects'>
        <div>
          <img className='pj-image' src="walk001.png" alt="" />
        </div>
        <div className='pj-right'>
          <p> Jan 2023 - May 2023 </p>
          <h2 className='underline'>Crosswalk Detection - Computer Vision Project </h2>
            <br />
            <h3 className='op75'> 
            To develop a crosswalk recognition algorithm using Python and OpenCV. The algorithm will tell the visually impaired people where they are currently located relative to the crosswalk and guide them through the crosswalk by providing instructions to ensure that they do not deviate far from the center of the crosswalk. 
            </h3>
          <br />
          <h3>Skills</h3>
          <div>
            <button className='skill-btn'>Python OpenCV</button> 
            <button className='skill-btn'>YOLOv8</button> 
            <button className='skill-btn'>Mahine Learning</button> 
            <button className='skill-btn'>Pygame</button> 
            <button className='skill-btn'>Object Detection</button> 
            <button className='skill-btn'>Deep Neural Network</button> 
            <button className='skill-btn'>Model Training</button> 
          </div>
          <br />
          <h3>Github</h3>
          <p className='pj-link'>
            <a href="https://github.com/XujuanChen/zebra-crossing-detection" target='_blank'> https://github.com/XujuanChen/zebra-crossing-detection </a>
          </p>
          <br />
          <h3>Video Walkthrough:</h3>
          <p className='pj-link'>
            <a href="https://www.youtube.com/watch?v=TBEuoX-klJw" target='_blank'> https://www.youtube.com/watch?v=TBEuoX-klJw </a>
          </p>
          <br />
        </div>
      </div>
      {/*  */}



    </div>
  )
}

export default Projects