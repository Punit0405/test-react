import { combineReducers } from 'redux'
import changeCollection from './selectCollectionReducers'

const rootReducer = combineReducers({
    changeCollection
})

export default rootReducer