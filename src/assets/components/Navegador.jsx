
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles/Navegador.css'

function Navegador() {
  return (


    <Nav className='bg-danger text-light d-flex mb-5'>
      <Nav.Item className=''>
        <Nav.Link className='text-white p-3' href="/">Home<span className="navIcon">🏠</span></Nav.Link>
      </Nav.Item>
      <Nav.Item className=''>
        <Nav.Link className='text-white p-3' href="/contacto">Contacto<span className="navIcon">📒</span></Nav.Link>
      </Nav.Item>
      <Nav.Item className='ms-auto'>
        <Nav.Link className='text-white p-3' href="/">Happy Cake <span className="navIcon">🍰</span></Nav.Link>
      </Nav.Item>
    </Nav>



  );
}

export default Navegador;