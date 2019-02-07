import { combineReducers } from 'redux'

import auth from './auth'
import coach from './coach'
import search from "./search";


export default combineReducers({ auth, coach , search })
