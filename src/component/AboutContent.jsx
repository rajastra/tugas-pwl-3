import React from 'react'
import logoItera from "../assets/logo-itera.jpg"
import gambarRaja from "../assets/raja-1.jpg"

const AboutContent = () => {
   return (
      <div class="about">
         <div>
            <h2 class="about-heading-secondary">About</h2>
            <h1 class="about-heading-primary"><span class="about-heading-hightlight">Raja Saputera</span></h1>
         </div>
         <div class="about-description-box">
            <div>
               <p class="about-text">
                  I'm a final semester Computer Science student specializing in Information Technology. With
                  internship experience as a frontend developer and a track record of successful projects, I'm
                  passionate about creating user-friendly websites.
               </p>
               <p class="about-text">
                  During my academic journey, I've not only honed my technical skills but also developed a knack for
                  designing visually appealing websites. My internships provided hands-on experience, enabling me to
                  apply my knowledge in real-world scenarios.
               </p>
               <p class="about-text">As I near graduation, I'm eager to leverage my skills to contribute to exciting
                  web development
                  projects. Feel free to explore my portfolio, and if you're interested in collaborating or have any
                  questions, please get in touch. I'm always excited to connect with fellow tech enthusiasts.</p>
            </div>
            <div class="about-image-box">
               <img src={gambarRaja} alt="gambar raja" class="about-image" />
            </div>
         </div>
         <div class="about-academic-box">
            <h2 class="about-heading-secondary">Academic Background</h2>
            <div class="about-academic-description-box">
               <div>
                  <img src={logoItera} alt="logo itera" class="about-academic-image" />
               </div>
               <div class="about-academic-text-box">
                  <p class="about-description">2020-2024(expected)</p>
                  <p class="about-institut">Institut Teknologi Sumatera</p>
                  <p class="about-description"> Computer Science</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutContent