import { useDispatch } from 'react-redux'
import {add} from '../reducers/anecdoteReducer'


const NewAnecdote = () =>{

    const dispatch = useDispatch()

    const addAnecdote = (event) =>{
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(add(content))
    }

    return(
      <form onSubmit={addAnecdote}>
        <input name='anecdote' />
        <button type='submit'>create</button>
      </form>
    )
}

export default NewAnecdote