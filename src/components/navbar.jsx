import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState('false');

useEffect (() => {
  const onScroll = () => {
    if (window.scrollY > 50) {
      seScrolled(true);
    } else {
      seScrolled(false);
    }
  }

  window.addEventListener('scroll', onScroll);

  return () => window.removeEventListener('scrill', onScroll);
}, []) 

const onUpdateActiveLink = (value) => {
  setActiveLink(value);
}

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled': '' }>
      <Container>
        <Navbar.Brand href="#home">
          La Liga
          {/* <img src={''} alt="logo" />*/} {/*puedo poner un logo aqui*/}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbae-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#incio" className={activeLink === 'incio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('inicio')}>Incio</Nav.Link>
            <Nav.Link href="#equipos"  className={activeLink === 'equipos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('equipos')}>Equipos</Nav.Link>
            <Nav.Link href="#tablas"  className={activeLink === 'tablas' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tablas')}>Tablas de posiciones</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src="" alt="" />
              </a>
              <a href="#">
                <img src="" alt="" />
              </a>
              <a href="#">
                <img src="" alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Contactanos</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
