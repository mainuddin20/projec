 import React, {Component, Fragment} from 'react';
 import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
 import Nav from 'react-bootstrap/Nav';
//  import Form from 'react-bootstrap/Form';
//  import NavDropdown from 'react-bootstrap/NavDropdown';
 import '../../asset/css/bootstrap.min.css';
import logo from '../../asset/images/logo.png';
import '../../asset/css/style.css';

class NavBar extends Component{
      render(){
            return(
                  <Fragment>

                              <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary menu">
                                    <Container>
                                    <Navbar.Brand href="#home"><img src={logo} alt="images" ></img></Navbar.Brand>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">
                                          
                                          
                                    </Nav>
                                    <Nav className="danmenu">
                                          <Nav.Link href="#deets">Home</Nav.Link>

                                          <Nav.Link href="#deets">Service</Nav.Link>

                                          <Nav.Link href="#deets">Protfolio</Nav.Link>

                                          <Nav.Link href="#deets">Blog</Nav.Link>

                                          <Nav.Link href="#deets">contact</Nav.Link>
                                          
                                    </Nav>
                                    </Navbar.Collapse>
                                    </Container>
                              </Navbar>



                                    

                  </Fragment>
            );
      }
}
export default NavBar;