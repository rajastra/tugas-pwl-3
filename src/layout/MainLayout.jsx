import React from 'react'
import Header from "../component/Header"
import Footer from "../component/Footer"

const MainLayout = ({ children }) => {
   return (
      <>
         <Header />
         <main>
            {children}
         </main>
         <Footer />
      </>
   )
}

export default MainLayout