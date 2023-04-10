import { combineReducers } from 'redux'
import changeCollection from './selectCollectionReducers'
import changeDesign from './selectDesignReducers'
import clientCollectionViewReducer from './clietGalleryViewReducers'
clientCollectionViewReducer

const rootReducer = combineReducers({
    changeCollection, changeDesign, clientCollectionViewReducer
})

export default rootReducer