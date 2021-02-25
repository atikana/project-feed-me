import React from 'react';
import './index.css';
import { Button, Form, Col } from 'react-bootstrap';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
  }

  clickHandle() {
    this.state.toggle ? 
    this.setState({ toggle: false  }) : 
    this.setState({ toggle: true });
  } 

  render () {
    const optionToggle = this.state.toggle ? 'display_none' : 'recipe_form';
    return (
      <div className="options">
        <Button 
          variant="primary" 
          type="submit"
          onClick={this.clickHandle.bind(this)}
        >
          Options
        </Button>
        <div className={optionToggle}>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select Ingredient</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Select Allergy</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Row>
              <Form.Label as={Col}>Type:</Form.Label>
              <Form.Group as={Col} controlId="exampleForm.ControlCheckbox1">
                <Form.Check inline label="Vegeterian" type="checkbox" id={`inline-checkbox-1`} />
                <Form.Check inline label="Halal" type="checkbox" id={`inline-checkbox-2`} />
            </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Label as={Col}>Sort By:</Form.Label>
              <Form.Group as={Col} controlId="exampleForm.ControlRadio1">
                <Form.Check inline label="Alphabetical" type="radio" id={`inline-radio-1`} />
                <Form.Check inline label="Popularity" type="radio" id={`inline-radio-2`} />
                <Form.Check inline label="Posted Time" type="radio" id={`inline-radio-3`} />
                <Form.Check inline label="Ascending" type="radio" id={`inline-radio-4`} />
                <Form.Check inline label="Descending" type="radio" id={`inline-radio-5`} />
              </Form.Group>
            </Form.Row>
            {/* <Button variant="primary" type="submit">
              add
            </Button> */}
          </Form>
        </div>
      </div>
    );
  }
}

export default RecipeForm;
