import { useState, useEffect, memo } from 'react'

function Home() {
  const [count, setCount] = useState(1207)

  useEffect(() => {
    document.title = `count: ${count}`
  }, [count])

  useEffect(() => {
    console.log('监听store数据变化')
    return () => console.log('取消监听store')
  }, [])

  // Other useEffect

  return (
    <div>
      <h2>Home Component</h2>
      <div>
        <h4>当前计数: {count}</h4>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  )
}

function App() {
  const [isShow, setIsShow] = useState(true)

  return (
    <div>
      <button onClick={() => setIsShow(!isShow)}>显示/隐藏</button>
      <div>{isShow && <Home />}</div>
    </div>
  )
}

export default memo(App)
