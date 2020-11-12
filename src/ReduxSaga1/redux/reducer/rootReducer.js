import {combineReducers} from 'redux'
import fetchDataReducer from './fetchDataReducer'

const rootReducer = combineReducers({
    user:fetchDataReducer
})

export default rootReducer