import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

import roorReducer from './reducers'

let middleware = [thunk, logger]

export default createStore(roorReducer, composeWithDevTools(applyMiddleware(...middleware)))
