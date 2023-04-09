import { combineReducers } from 'redux'
import changeCollection from './selectCollectionReducers'
import changeDesign from './selectDesignReducers'
import clientCollectionViewReducer from './clietGalleryViewReducers'
import setFiles from './setFilesReducer'
clientCollectionViewReducer

const rootReducer = combineReducers({
    changeCollection, changeDesign, clientCollectionViewReducer, setFiles
})

export default rootReducer