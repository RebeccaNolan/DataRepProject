import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Music World</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Products">Products</Nav.Link>
          <Nav.Link href="/Add">Add</Nav.Link>
          <Nav.Link href="/Wishlist">Wishlist</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;