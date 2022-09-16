import React, { memo, useState, useEffect, useLayoutEffect } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(1207)

  useLayoutEffect(() => {
    console.log('useLayoutEffect', count)
  })

  useEffect(() => {
    console.log('useEffect', count)
  })

  return (
    <div>
      <h4>当前计数: {count}</h4>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default App
