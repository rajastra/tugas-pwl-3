import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Footer from "./component/Footer";
import Header from "./component/Header";
import About from "./page/About";
import Contact from "./page/Contact";

function App() {
   return (
      <div>
         <Header />
         <main>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
         </main>
         <Footer />
      </div>
   );
}

export default App;
