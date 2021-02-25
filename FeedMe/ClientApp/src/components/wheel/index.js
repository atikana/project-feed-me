import React from 'react';
import './index.css';
import { Button, Modal } from 'react-bootstrap';
import Carousel from './../carousel';


class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      show: false
    };
    this.selectItem = this.selectItem.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }


  handleShow() {
    this.state.show ? 
    this.setState({ show: false  }) : 
    this.setState({ show: true });
  }

  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  }

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';
    return (
      <div className="flex-wheel">
        <div className="wheel-container">
          <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
            {items.map((item, index) => (
              <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                {item}
              </div>
            ))}
          </div>
          <Button variant="primary" className="view-recipe" onClick={this.handleShow}>
            View Recipe
          </Button>
        </div>
        <Modal className="modal-container" show={this.state.show} size="xl" onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Recipe Title</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body-container">
              <Carousel />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Wheel;
