// import {legacy_createStore} from 'redux'
// import {counterReducer} from './reducer'
// const store=legacy_createStore(counterReducer)
// export default store

import  counterReducer  from './reducer'
import { configureStore } from '@reduxjs/toolkit'
const store = configureStore(
    {
        reducer: {
            counter: counterReducer
        }
    }
)
export default store;