import React, {Component, Fragment} from "react";
import { Container, Col, Card, Button, Row,  } from "react-bootstrap";
import { FaArrowAltCircleDown } from "react-icons/fa";





class SerVice extends Component{
      render(){
            return(
                  <Fragment>

                  <Container className="bgrnd">
                        
                        <Row>
                        <h1 className="black text-center mt-5"> My <span className="info">Service</span> </h1>

                              <Col lg={3} md={6} sm={12} className=" redeas mt-5">

                                    <Card className="card">
                                          
                                          <Card.Body className="text-center">
                                          <FaArrowAltCircleDown className="icons mt-4"/>
                                          <Card.Title className=" title mt-3">Data entry</Card.Title>
                                          <Card.Text>
                                          Some quick example text to build on the card title and make up the
                                          bulk of the card's content.
                                          </Card.Text>
                                          <Button variant="primary">Join Now</Button>
                                          </Card.Body>
                                    </Card>
                              </Col>

                              <Col lg={3} md={6} sm={12} className="mt-5">

                                    <Card >
                                    
                                    
                                          <Card.Body className="text-center">
                                          <FaArrowAltCircleDown className="icons mt-4"/>
                                          <Card.Title className="title mt-3">Digital merketing</Card.Title>
                                          <Card.Text>
                                          Some quick example text to build on the card title and make up the
                                          bulk of the card's content.
                                          </Card.Text>
                                          <Button variant="primary">Join Now</Button>
                                          </Card.Body>
                                    </Card>
                              </Col>

                              <Col lg={3} md={6} sm={12} className="mt-5">

                                    <Card>
                                     
                                          <Card.Body className="text-center">
                                          <FaArrowAltCircleDown className="icons mt-4"/>
                                          <Card.Title className="title mt-3">Web design</Card.Title>
                                          <Card.Text>
                                          Some quick example text to build on the card title and make up the
                                          bulk of the card's content.
                                          </Card.Text>
                                          <Button variant="primary">Join Now</Button>
                                          </Card.Body>
                                    </Card>
                              </Col>

                              <Col lg={3} md={6} sm={12} className="mt-5">

                                    <Card >
                                    
                                          <Card.Body className="text-center">
                                          <FaArrowAltCircleDown className="icons mt-4"/>
                                          <Card.Title className=" title mt-3">React develop</Card.Title>
                                          <Card.Text >
                                          Some quick example text to build on the card title and make up the
                                          bulk of the card's content.
                                          </Card.Text>
                                          <Button  >Join Now</Button>
                                          </Card.Body>
                                    </Card>
                              </Col>
                        </Row>

                        

                       
                              
                  </Container>



                                    

                  </Fragment>
            );
      }
}
export default SerVice;