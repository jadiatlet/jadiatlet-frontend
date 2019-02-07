import { combineReducers } from 'redux'

import auth from './auth'
import coach from './coach'
import search from './search'
import course from './course'

export default combineReducers({ auth, coach, search, course })
