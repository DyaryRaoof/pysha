import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Badge,
  Button,
} from 'react-bootstrap';
import profile from '../../imgs/me.jpeg';
import './MyNavbar.css';

const MyNavbar = ({ isLoggedIn }) => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Pysha</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!isLoggedIn ? (
              <>
                <Nav.Link href="#home">Log In</Nav.Link>
                <Nav.Link href="#home">Sign Up</Nav.Link>
              </>
            ) : (
              ''
            )}
            {isLoggedIn ? (
              <>
                <Button variant="dark">
                  Messages{' '}
                  <Badge pill bg="danger">
                    9
                  </Badge>
                  <span className="visually-hidden">unread messages</span>
                </Button>

                <NavDropdown title="Dyary Raoof" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Log out
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <img id="nav-profile" src={profile} alt="profile picture" />
              </>
            ) : (
              ''
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
