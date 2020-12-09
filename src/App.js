import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollContainer from 'react-indiana-drag-scroll';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';

import ocean_jpg from './images/ocean_pacific_grove.jpg';

// Wedding details go here.
class Description extends Component {
  render() {
    return (
        <div>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
      <p>HiieHiieHiieHiieHiieHiieHiieHiie</p>
        </div>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {display_contact_info : false}
  }

  render() {
    return (
    <div className="App">
      <div className="bg" style={{ backgroundImage: `url(${ocean_jpg})`}}>
      <Navbar className="color-nav" variant="light" expand="lg">
        <Navbar.Brand href="#home">Maria & Michael</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#registry">Registry</Nav.Link>
            <Nav.Link onClick={() => this.openContactInfo()}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal className="contact-modal" show={this.state.display_contact_info} onHide={() => this.closeContactInfo()}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Maria: mariamccauley27@gmail.com</p>
        <p>Michael: michaelforrquigley@gmail.com</p>
      </Modal.Body>
      </Modal>

      <ScrollContainer fluid="md" className="scroll" horizontal={false}>
        <Row>
          <Col/>
          <Col xs={10}>
          <Jumbotron bsPrefix="main-text">
            <h1>Hi all!</h1>
            <Description/>
          </Jumbotron>
          </Col>
          <Col/>
        </Row>
      </ScrollContainer>

      </div>
    </div>
  );
  }

  openContactInfo() {
    this.setState({display_contact_info : true});
  }

  closeContactInfo() {
    this.setState({display_contact_info : false});
  }
}
