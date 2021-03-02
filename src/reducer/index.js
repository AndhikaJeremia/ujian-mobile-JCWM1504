import {combineReducers} from 'redux'

import userReducer from './userReducer'
import dataReducer from './dataReducer'

const allReducer = combineReducers({
    userReducer,
    dataReducer
})

export default allReducer