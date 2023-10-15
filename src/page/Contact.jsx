import React, { useState } from 'react'
import MainLayout from "../layout/mainLayout"

const Contact = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form submitted:', { name, email, message });
      // TODO: Add form submission logic here
   };


   return (
      <MainLayout>
         <section class="section-about">
            <div class="about">
               <div>
                  <h2 class="about-heading-secondary"></h2>
                  <h1 class="about-heading-primary"><span class="about-heading-hightlight">Contact Me</span></h1>
               </div>
               <form onSubmit={handleSubmit} className="form-contact">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
                  <button type="submit" className="btn-submit">Submit</button>
               </form>
            </div>
         </section>
      </MainLayout >
   )
}

export default Contact