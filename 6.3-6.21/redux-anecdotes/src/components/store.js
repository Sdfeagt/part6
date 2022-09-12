import {configureStore} from '@reduxjs/toolkit'
import reducerAnecdotes from '../reducers/anecdoteReducer'

console.log("In store");
const store = configureStore ({
    reducer:{
        anecdotes: reducerAnecdotes
    }
})

export default store