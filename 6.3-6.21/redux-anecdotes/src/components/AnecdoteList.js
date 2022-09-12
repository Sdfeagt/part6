import { vote } from "../reducers/anecdoteReducer"
import { useSelector, useDispatch } from 'react-redux'

const AnecdotesList = () =>{
    const anecdotesUnused = useSelector(state => state)
    console.log("Unused: ", anecdotesUnused);
    const compareVotes = (a,b) => {
      return a.votes-b.votes
    }
  
    const canecdotesMess = anecdotesUnused.anecdotes
    const anecdotes = canecdotesMess.sort(compareVotes)
    console.log("sorted: ", anecdotes);
    const dispatch = useDispatch()

    return (
        <div>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
            </div>
          </div>
        )}
        </div>
    )
}

export default AnecdotesList