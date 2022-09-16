import React, { useReducer, memo } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

const App = memo(() => {
  const [state, dispatch] = useReducer(reducer, { count: 1207 })

  return (
    <div>
      <h4>当前计数: {state.count}</h4>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </div>
  )
})

export default App
