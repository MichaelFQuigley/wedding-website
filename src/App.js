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
      <h1>We Got Married!</h1>
      <hr/>
      On December 10th, 2020 Maria McCauley and Michael Quigley were married in a private ceremony in Carmel, California.
      <hr/>

      <p>Dear Family and Friends,</p>
      <p>When we began planning our wedding in February we could not have anticipated the unprecedented nature of the year before us. After months of planning and replanning we decided to exchange our vows in a simple and intimate ceremony near our home in Pacific Grove, California. </p>

      <p>Although we did not have the wedding we initially envisioned, and the absence of our families and friends was deeply felt, we are beyond thrilled to be starting our married life. We are looking forward to planning a large reception to celebrate our love and marriage once we can all travel and be together safely. We will provide updates here when we have more information regarding a celebration.</p>

      <p>Maria and Michael Quigley</p>
      </div>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_contact_info : false,
      display_registry_info : false,
      display_photos : false
    }
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
              <Nav.Link onClick={() => this.openPhotos()}>Photos</Nav.Link>
              <Nav.Link onClick={() => this.openContactInfo()}>Contact Info</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Modal className="site-modal"
            show={this.state.display_contact_info} onHide={() => this.closeContactInfo()}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Maria: mariamccauley27@gmail.com</p>
            <p>Michael: michaelforrquigley@gmail.com</p>
          </Modal.Body>
        </Modal>

        <Modal className="site-modal"
            show={this.state.display_registry_info} onHide={() => this.closeRegistryInfo()}>
          <Modal.Header closeButton>
            <Modal.Title>Registry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          We are registered at: <a href="https://www.myregistry.com/wedding-registry/maria-quigley-and-michael-quigley-pacific-grove-ca/2673228/giftlist">myregistry.com</a>
          </Modal.Body>
        </Modal>

        <Modal className="site-modal"
            show={this.state.display_photos} onHide={() => this.closePhotos()}>
          <Modal.Header closeButton>
            <Modal.Title>Wedding Photos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <a href="https://photos.app.goo.gl/MTsWPz21byThiKfq7" target="_blank" rel="noopener noreferrer">Google Photos Link</a>
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

  openPhotos() {
    this.setState({display_photos : true});
  }

  closePhotos() {
    this.setState({display_photos : false});
  }


}
