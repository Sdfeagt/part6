/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  console.log("In GetAll...");
  const response = await axios.get(baseUrl)
  console.log("Response: ", response.data);
  return response.data
}

export default { getAll }