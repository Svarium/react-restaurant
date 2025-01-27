import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import {About, Contact, Home, Menu } from './pages' 

function App() { 
  return (
    <>
      <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">  
          <Container>
            <Navbar.Brand>
              <Link to="/" className="navbar-brand text-success fw-semibold">
                  React Restaurant
               </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav"> 
              <Nav className="me-auto justify-content-end w-100">
                <Nav.Link href="/" className="active text-uppercase">Home</Nav.Link>
                <Nav.Link href="/menu" className="text-uppercase">Menu</Nav.Link>
                <Nav.Link href="/about" className=" text-uppercase">About</Nav.Link>
                <Nav.Link href="/contact" className=" text-uppercase">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>

      <footer className="bg-body-tertiary">
        <p className="p-3 m-0 text-center">copyright @ made by Comision React3</p>
      </footer>
    </>
  )
}

export default App
