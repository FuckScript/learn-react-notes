import { useState, memo } from 'react'

function App() {
  const [count, setCount] = useState(1207)

  return (
    <div>
      <h4>当前计数: {count}</h4>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default memo(App)
