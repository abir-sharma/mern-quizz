import {configureStore} from '@reduxjs/toolkit'
import { appReducer } from './reducers/userReducer'

const store=configureStore({
    reducer:{
        appInfo:appReducer,
    }
})

export default store