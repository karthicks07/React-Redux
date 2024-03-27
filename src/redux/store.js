import { createStore, combineReducers } from 'redux'
import cakereducer from './cakes/cakereducer'

const rootReducer = combineReducers({
    cakereducer: cakereducer
})

const store = createStore(rootReducer)

export default store
