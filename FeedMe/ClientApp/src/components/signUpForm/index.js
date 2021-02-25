import React from 'react';
import './index.css';
import { Button, Form, Jumbotron } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Actions from '../../actions';

function SignUp() {
  const loggedIn = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div id="sign-in-container">
        <a href="/" className="title">Account Registration</a>
        <Form className="sign-up-form">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Username" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
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
                <Button 
                  href="/account/addrecipe" 
                  variant="primary" 
                  onClick={()=>dispatch(Actions.signIn())}>
                  Add New Recipe!
                </Button>
            </Form.Group>
          </Form>
    </div>
  );
}

export default SignUp;
