import NewAnecdote from './components/AnecdoteForm'
import AnecdotesList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'


const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <Filter/>
      <AnecdotesList/>
      <h2>create new</h2>
      <NewAnecdote />
    </div>
  )
}

export default App