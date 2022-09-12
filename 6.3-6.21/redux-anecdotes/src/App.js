import NewAnecdote from './components/AnecdoteForm'
import AnecdotesList from './components/AnecdoteList'
import Notification from './components/Notification'


const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <AnecdotesList/>
      <h2>create new</h2>
      <NewAnecdote />
    </div>
  )
}

export default App