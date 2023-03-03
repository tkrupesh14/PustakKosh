
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">PustakKosh</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='text-white text-decoration-none px-2'>Home</Link>
            <Link to="/donor" className='text-white text-decoration-none px-2'>Donor</Link>
            <Link to="/needy" className='text-white text-decoration-none px-2'>Needy</Link>
            <Link to="/learn" className='text-white text-decoration-none px-2'>Learn</Link>
            <Link to="/community" className='text-white text-decoration-none px-2'>Community</Link>
   
          </Nav>
          <Nav>
          <Link to="/login" className='px-2'><Button variant="light">Login</Button></Link>
            <Link to="/signup">
            <Button variant="light">Signup</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
