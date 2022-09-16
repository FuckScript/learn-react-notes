import React, { memo, useRef, forwardRef, useImperativeHandle } from 'react'

const Hello = memo(
  forwardRef((props, ref) => {
    const inputRef = useRef()

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus()
      }
    }))

    return <input type="text" ref={inputRef} />
  })
)

const App = memo(() => {
  const inputRef = useRef()
  const setInputRef = () => {
    inputRef.current.focus()
    // inputRef.current.value = '' 无效
  }

  return (
    <div>
      <Hello ref={inputRef} />
      <button onClick={setInputRef}>获取焦点</button>
    </div>
  )
})

export default App
