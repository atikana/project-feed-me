import recipeReducer from './recipe';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    recipe: recipeReducer, 
    isLogged: loggedReducer
})

export default allReducers;