/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  console.log("In GetAll...");
  const response = await axios.get(baseUrl)
  console.log("Response: ", response.data)
  return response.data
}

const create = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object);
  return response.data
};

const update = async (anecdote) => {
  console.log("In update, anecdote ID: ", anecdote.id);
  const id = anecdote.id;
  const votes = { votes: anecdote.votes + 1 }
  console.log("In update, votes: ", votes);
  const response = await axios.patch(`${baseUrl}/${id}`, votes);
  return response.data
};

export default { getAll, create, update }