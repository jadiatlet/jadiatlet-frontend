import { combineReducers } from 'redux'

import auth from './auth'
import coach from './coach'

export default combineReducers({ auth, coach })
