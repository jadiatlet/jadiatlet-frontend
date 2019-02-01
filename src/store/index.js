import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import roorReducer from './reducers'

let middleware = [thunk]

export default createStore(roorReducer, applyMiddleware(...middleware))
