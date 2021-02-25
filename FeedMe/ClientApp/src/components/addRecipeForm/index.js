import React from 'react';
import './index.css';
import { Button, Form, Jumbotron, Col } from 'react-bootstrap';

function AddRecipeForm() {
  return (
    <div id="sign-in-container">
        <a href="/" className="title">Add New Recipe</a>
        <Form className="sign-up-form">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control type="email" placeholder="Recipe Name" />
            </Form.Group>
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
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Procedure</Form.Label>
              
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Jumbotron>
                <h1>Agreement</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Fusce ut ullamcorper mauris. In ac gravida tellus. Vestibulum pretium neque ac quam feugiat viverra. 
                  Duis volutpat dignissim nibh eu vulputate. Integer fermentum consequat sagittis. Nunc commodo orci quis libero porttitor, 
                  et tincidunt magna pulvinar. Nam condimentum massa lectus, at suscipit leo sagittis ut.   
                </p>
                <Form.Check type="checkbox" label="I Agree" />
              </Jumbotron>
            </Form.Group>
            <Form.Group controlId="formButton">
                <Button href="/account/profile" variant="primary">
                  Add New Recipe!
                </Button>
            </Form.Group>
          </Form>
    </div>
  );
}

export default AddRecipeForm;
