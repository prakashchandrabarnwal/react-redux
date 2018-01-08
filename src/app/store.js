/**
 * Created by prakashchandrabarnwal on 31/12/17.
 */

import { createLogger } from "redux-logger";
import userReducer from './reducers/userReducer'
import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const store=createStore(combineReducers({userReducer}) ,{}, applyMiddleware(createLogger(),thunk,promise()));

export default store;