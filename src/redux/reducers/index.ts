import { combineReducers } from 'redux'
import changeCollection from './selectCollectionReducers'
import changeDesign from './selectDesignReducers'

const rootReducer = combineReducers({
    changeCollection, changeDesign
})

export default rootReducer