import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import roorReducer from './reducers'

let middleware = [thunk]

export default createStore(roorReducer, composeWithDevTools(applyMiddleware(...middleware)))
