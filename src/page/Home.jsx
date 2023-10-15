import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
   return (
      <section class="section-home">
         <div className="home">
            <div>
               <h2 className="home-heading-secondary">Hi!</h2>
               <h1 className="home-heading-primary">
                  You can call me <span className="home-heading-hightlight">Raja</span>
               </h1>
               <p className="home-paragraph">I am a web developer with a focus on the front end.</p>
            </div>
            <div className="icon-container">
               <a className="icon-box" href="#">
                  <FontAwesomeIcon icon={faFileAlt} />
                  <p>Resume</p>
               </a>
               <a className="icon-box" href="https://github.com/rajastra" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                  <p>Github</p>
               </a>
               <a className="icon-box" href="https://www.instagram.com/rajastraa/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                  <p>Instagram</p>
               </a>
               <a className="icon-box" href="https://www.linkedin.com/in/rajasaputera/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                  <p>LinkedIn</p>
               </a>
            </div>
         </div>
      </section>
   )
}

export default Home