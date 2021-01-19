/**
 * Store
 */

// import createStore and combineReducers from redux
import { createStore, combineReducers } from 'redux';

// Import reducers
import CalculatorReducer from './Calculator/Calculator.reducer';

// Combine reducers
const rootReducer = combineReducers({
    calculator: CalculatorReducer
});

// Create store
const store = createStore(rootReducer);

export default store;