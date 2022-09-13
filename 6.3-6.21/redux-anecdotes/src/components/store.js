import {configureStore} from '@reduxjs/toolkit'
import reducerAnecdotes from '../reducers/anecdoteReducer'
import notificationReducer from '../reducers/notificationReducer'
import filterReducer from '../reducers/filterReducer'

const store = configureStore ({
    reducer:{
        anecdotes: reducerAnecdotes,
        notification: notificationReducer,
        filter: filterReducer
    }
})

export default store