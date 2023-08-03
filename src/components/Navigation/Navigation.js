import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './img/Logo_4.png';


function ContainerInsideExample() {
  return (
    <Navbar bg="dark" >
      <Container>
        <Navbar.Brand className='respnav' href="/"><img src={logo} className='logo' alt='logo'/></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end me-auto">   
        <div className='textodorado'>
        <span>
            <a href='#comprar' className='primary a'>
                DÓNDE COMPRAR
            </a>
          </span>
          <span className="navbar-space"></span>
          <span>
            <a href='#contacto' className='primary a'>
                CONTÁCTANOS
            </a>
          </span>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;