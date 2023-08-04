import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function ContainerInsideExample() {
  return (
    <Navbar bg="dark" >
      <Container>
        <Navbar.Brand className='respnav' href="/"><img src="img/Logo_5.png" className='logo' alt='logo'/></Navbar.Brand>
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