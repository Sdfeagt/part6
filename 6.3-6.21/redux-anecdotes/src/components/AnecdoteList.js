import { vote } from "../reducers/anecdoteReducer"
import { useSelector, useDispatch } from 'react-redux'
import {createNotification} from "../reducers/notificationReducer"


const AnecdotesList = () =>{
    const anecdotesUnused = useSelector(state => state)
    const filter = useSelector((state) => state.filter);
    const compareVotes = (a,b) => {
      return a.votes-b.votes
    }
  
    const canecdotesMess = anecdotesUnused.anecdotes
    const anecdotes = canecdotesMess.sort(compareVotes)

    const dispatch = useDispatch()

const handleVote = (anecdote)=>{
  dispatch(vote(anecdote.id))
  dispatch(createNotification(`You voted '${anecdote.content}'`, 5))

}

    return (
        <div>
        {anecdotes.filter((anecdote) => anecdote.content.includes(filter)).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        )}
        </div>
    )
}

export default AnecdotesList