import React from 'react';
import './index.css';
import RecipeForm from '../recipeForm';
import Wheel from '../wheel';

class App extends React.Component {
  constructor() {
    super();
    this.places = ['Pizzas', 'Sandwiches', 'Salads', 'Soup', 'Japanese food', 'Pastas'];
  }
  
  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <RecipeForm />
          <Wheel items={this.places} />
        </div>
      </div>
    );
  }
}

export default App;
