import { createStore, applyMiddlware, thunk, logger } from '../redux-lite';
import rootReducer from './reducers'

export default createStore(rootReducer, applyMiddlware(thunk, logger))
