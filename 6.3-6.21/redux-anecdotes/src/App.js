import NewAnecdote from './components/AnecdoteForm'
import AnecdotesList from './components/AnecdoteList'


const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdotesList/>
      <h2>create new</h2>
      <NewAnecdote />
    </div>
  )
}

export default App