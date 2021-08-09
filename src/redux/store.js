import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import root from './reducer'
import logger from 'redux-logger'

const store = createStore(
    root,applyMiddleware(thunk, logger))

export default store