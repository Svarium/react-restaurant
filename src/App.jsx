import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import {About, Contact, Home, Menu } from './pages' 
import { Footer, NavBar } from "./components";

function App() { 
  return (
    <>     
      <NavBar/>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>

     <Footer/>
    </>
  )
}

export default App
