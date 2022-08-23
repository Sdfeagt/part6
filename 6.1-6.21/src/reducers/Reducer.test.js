import reducer from './reducer'
import deepFreeze from 'deep-freeze'

describe('reducer', () => {
  test('Increments good by 1', () => {
    const state ={
        good: 0,
        ok: 0,
        bad: 0
      }
    const action = {
      type: 'GOOD'
    }
    console.log(action);

    const newState = reducer(state, action)
    deepFreeze(state)

    expect(newState.good).toBe(1)
  })
  test('Reset works', () =>{
    const state ={
        good: 1,
        ok: 2,
        bad: 3
      }
    const action = {
      type: 'ZERO'
    }
    console.log(action);
    
    const newState = reducer(state, action)
    deepFreeze(state)
    
    expect(newState.good).toBe(0)
    expect(newState.ok).toBe(0)
    expect(newState.bad).toBe(0)
    })
  })
