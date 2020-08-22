import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//import logger from 'redux-logger';
import { Provider } from 'react-redux'; // imported provider
import { createStore, combineReducers, applyMiddleware} from 'redux'; // imported createStore, combineReducers, applyMiddleware


const feelingReducer = (state, action ) => {
    if (action.type === 'SET_FEELING'){
        return action.payload
    }
    return state
}

// FINISH THESE REDUCERS !!!!!
const understandingReducer = (state, action ) => {
    if (action.type === ''){
        return action.payload
    }
    return state
}

const supportReducer = (state, action ) => {
    if (action.type === ''){
        return action.payload
    }
    return state
}

const commentsReducer = (state, action ) => {
    if (action.type === ''){
        return action.payload
    }
    return state
}


const store = createStore(
    combineReducers({
        
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
    //applyMiddleware(logger)
)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
