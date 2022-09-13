import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const anecdoteReducer = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload
      const voteToChange = state.find(v => v.id === id)
      const changedVote = {
        ...voteToChange, votes: voteToChange.votes + 1
      }
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedVote
      );
    },
    append(state, action) {
      state.push(action.payload);
    },
    add(state, action) {
      return action.payload;
    },
  },
});


export const initialize = () => {
  console.log("Initializing...");
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(add(anecdotes));
  };
};

export const create = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.create(content);
    dispatch(append(newAnecdote));
  };
};

export const { vote, append, add } = anecdoteReducer.actions;

export default anecdoteReducer.reducer;