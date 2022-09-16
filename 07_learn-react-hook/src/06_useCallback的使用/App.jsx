import React, { memo, useState, useCallback, useRef } from 'react'

const Hello = memo(props => {
  console.log('Hello Component rerender')

  return (
    <div>
      <button onClick={() => props.increment()}>Hello Component + 1</button>
    </div>
  )
})

const App = memo(() => {
  const [count, setCount] = useState(1207)
  const [message, setMessage] = useState('Hello Qiyana')

  // const increment = () => setCount(count + 1) // 当message发生改变时, Hello组件会重新渲染
  // const increment = useCallback(() => {
  //   setCount(count + 1)
  // }, [count])

  // 进一步优化
  const countRef = useRef()
  countRef.current = count
  const increment = useCallback(() => {
    setCount(countRef.current + 1)
  }, [])

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => setMessage(Math.random())}>修改文本</button>

      <h4>当前计数: {count}</h4>
      <button onClick={increment}>+1</button>
      <Hello increment={increment} />
    </div>
  )
})

export default App
