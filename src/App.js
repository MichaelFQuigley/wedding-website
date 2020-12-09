import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import ocean_jpg from './images/ocean_pacific_grove.jpg';

// Wedding details go here.
class Description extends Component {
  render() {
    return (
        <div>
      <p>Hi All!</p>
      <hr/>
      We got married in a small ceremony on December 10th, 2020.
      </div>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {display_contact_info : false, display_registry_info : false}
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
              <Nav.Link onClick={() => this.openRegistryInfo()}>Registry</Nav.Link>
              <Nav.Link onClick={() => this.openContactInfo()}>Contact Info</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Modal className="contact-modal"
            show={this.state.display_contact_info} onHide={() => this.closeContactInfo()}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Maria: mariamccauley27@gmail.com</p>
            <p>Michael: michaelforrquigley@gmail.com</p>
          </Modal.Body>
        </Modal>

        <Modal className="registry-modal"
            show={this.state.display_registry_info} onHide={() => this.closeRegistryInfo()}>
          <Modal.Header closeButton>
            <Modal.Title>Registry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          We are registered at: <a href="https://www.amazon.com/wedding/michael-quigley-maria-mccauley--december-2020/registry/107KFD7EQ1118">Amazon</a>
          </Modal.Body>
        </Modal>

        <div className="main-text">
        <Description/>
        </div>

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

  openRegistryInfo() {
    this.setState({display_registry_info : true});
  }

  closeRegistryInfo() {
    this.setState({display_registry_info : false});
  }

}
