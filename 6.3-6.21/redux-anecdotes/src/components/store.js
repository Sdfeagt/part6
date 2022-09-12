import {configureStore} from '@reduxjs/toolkit'
import reducerAnecdotes from '../reducers/anecdoteReducer'
import notificationReducer from '../reducers/notificationReducer'

console.log("In store");
const store = configureStore ({
    reducer:{
        anecdotes: reducerAnecdotes,
        notification: notificationReducer
    }
})

export default store