import { combineReducers } from 'redux'
import changeCollection from './selectCollectionReducers'
import changeDesign from './selectDesignReducers'
import clientCollectionViewReducer from './clietGalleryViewReducers'
import changeStorage from './setStorageReducers'
import changePortfolio from './selectPortfolioReducer'
clientCollectionViewReducer

const rootReducer = combineReducers({
    changeCollection, changePortfolio,changeDesign, clientCollectionViewReducer, changeStorage
})

export default rootReducer