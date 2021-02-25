import React from 'react';
import './index.css';
import { Navbar, Nav, Modal, Button, Form } from 'react-bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      show: false
    };
  }

  componentDidMount() {
  }

  handleShow() {
    this.state.loggedIn ? 
    this.setState({ loggedIn: false  }) : 
    this.state.show ? 
    this.setState({ show: false  }) : 
    this.setState({ show: true });
  }

  handleSignIn() {
    this.state.show ? 
    this.setState({ show: false, loggedIn: true }) : 
    this.setState({ show: true, loggedIn: false });
  }

  render() {
    const loggedIn = (this.state.loggedIn ? 'Log Out' : 'Log In');
    const displayProfile = (this.state.loggedIn ? '' : 'display_none');
    return (
      <header>
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="/">Feed Me</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="/account/browse/all">Browse All</Nav.Link>
              <Nav.Link href="#">Look For Friends</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
              <Nav.Link href="/credit">Credits</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Link href="/account/profile" className={displayProfile}>Profile</Nav.Link>
              {/* <Nav.Link href="#">{loggedIn}</Nav.Link> */}
              <Button variant="primary" onClick={this.handleShow.bind(this)}>
                {loggedIn}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Modal show={this.state.show} onHide={this.handleShow.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>LOGIN</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="primary" onClick={this.handleSignIn.bind(this)}>
              Sign In
            </Button>
            <Button variant="primary" href="/signup" className="sign-up">
              Sign Up
            </Button>
            <Button variant="secondary" onClick={this.handleShow.bind(this)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </header>
    );
  }
}

export default Header;
