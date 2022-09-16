import React, { memo, useRef, useState } from 'react'

let obj = null

const App = memo(() => {
  const [count, setCount] = useState(1207)

  // 1. 绑定DOM
  const inputRef = useRef()
  const btnRef = useRef()
  const inputFocus = () => {
    console.log(btnRef.current)
    inputRef.current.focus()
  }

  console.log(obj === inputRef)
  obj = inputRef

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button ref={btnRef} onClick={inputFocus}>
        获取焦点
      </button>
      <hr />

      <h4>当前计数: {count}</h4>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default App
