import React, { useState, useEffect, memo } from 'react'

function App() {
  const [count, setCount] = useState(1)
  useEffect(() => {
    document.title = `count: ${count}`
  }, [count])

  return (
    <div>
      <h4>当前计数: {count}</h4>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

export default memo(App)
