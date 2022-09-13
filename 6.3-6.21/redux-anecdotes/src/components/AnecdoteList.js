import {initialize, update } from "../reducers/anecdoteReducer"
import { useSelector, useDispatch } from 'react-redux'
import {createNotification} from "../reducers/notificationReducer"
import { useEffect } from "react"


const AnecdotesList = () => {
  const anecdotes = useSelector((state) =>
    state.filter
      ? state.anecdotes.filter((anecdote) =>
          anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
        )
      : state.anecdotes
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);


const handleVote = (anecdote)=>{ 
  dispatch(update(anecdote))
  dispatch(createNotification(`You voted '${anecdote.content}'`, 5))

}

    return (
        <div>
        {anecdotes.map(anecdote =>
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