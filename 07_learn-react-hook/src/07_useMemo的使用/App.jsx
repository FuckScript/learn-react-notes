import React, { memo, useState, useMemo } from 'react'

function calcNumTotal(num) {
  console.log('开始计算50之内的数字和')
  let total = 0
  for (let i = 1; i <= num; i++) {
    total += i
  }
  return total
}

const Hello = memo(() => {
  console.log('Hello Component rerender')
  return <div>Hello Component</div>
})

const App = memo(() => {
  const [count, setCount] = useState(1207)

  // const result = calcNumTotal(50) // 每次count发生改变时, calcNumTotal函数都会重新执行一次
  // const info = { nickname: 'Qiyana', level: 1207 } // 每次count发生改变时, 子组件都会重新渲染
  const result = useMemo(() => calcNumTotal(50), [])
  const info = useMemo(() => ({ nickname: 'Qiyana', level: 1207 }), [])

  return (
    <div>
      <h2>计算50之内的数字和: {result}</h2>

      <h4>当前计数: {count}</h4>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Hello info={info} />
    </div>
  )
})

export default App
