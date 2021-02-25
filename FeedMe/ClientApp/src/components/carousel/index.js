import React from 'react';
import './index.css';
import Map from './../map';
import { Button, ButtonGroup, Carousel } from 'react-bootstrap';


class CustomCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      show: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleShow() {
    this.state.show ? 
    this.setState({ show: false  }) : 
    this.setState({ show: true });
  }

  handleSelect (selectedIndex, e) {
    this.setState({index: selectedIndex});
  };

  render() {
    return (
      <div className="flex-container">
        <div className="flex-button-group">
          <ButtonGroup vertical>
            <Button variant="primary" href="/account/profile">
              Favorite
            </Button>
            <Button variant="primary" onClick={this.handleShow}>
              Where to get?
            </Button>
            <Button variant="primary">
              Download
            </Button>
            <Button variant="primary" href="/account/profile">
              Blacklist
            </Button>
          </ButtonGroup>
        </div>
        <div className={this.state.show ? 'display_none' : 'carousel-container'}>
          <Carousel 
            activeIndex={this.state.index} 
            onSelect={this.handleSelect}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://w.wallhaven.cc/full/43/wallhaven-43zpw6.jpg"
                alt="first slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://w.wallhaven.cc/full/43/wallhaven-43zpw6.jpg"
                alt="second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://w.wallhaven.cc/full/43/wallhaven-43zpw6.jpg"
                alt="third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={this.state.show ? 'carousel-container' : 'display_none'}>
          <Map />
        </div>
      </div>
    );
  }
}

export default CustomCarousel;
