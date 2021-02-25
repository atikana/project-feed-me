import React from 'react';
import './index.css';
import './index.css';
import { Button, Card, Tabs, Tab } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Actions from './../../actions';


function BrowseAll() {
  const recipes = useSelector(state => state.recipe);
  // const dispatch = useDispatch();

  return (
    <div id="profile-container">
        <a href="/" className="title">All Recipes</a>
        <div>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="favorites" title="Favorites">
            </Tab>
            <Tab eventKey="uploads" title="Uploads">
            </Tab>
          </Tabs>
          <div className="flex-grid-container">
           {recipes.map(recipe => 
              <div>
                <Card style={{ width: '18rem', height: '22rem',  margin: '5px' }}>
                  <Card.Img 
                    variant="top" 
                    src={recipe.url} 
                  />
                  <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                    <Card.Text>
                      {recipe.content}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )}
          </div>
        </div>
    </div>
  );
}

export default BrowseAll;
