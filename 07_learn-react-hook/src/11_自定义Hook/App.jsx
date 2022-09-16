import React, { memo, useState, useEffect } from 'react'

function useLogCourse(componentName) {
  useEffect(() => {
    console.log(`${componentName}组件创建`)
    return () => {
      console.log(`${componentName}组件销毁`)
    }
  })
}

const Home = memo(() => {
  useLogCourse('Home')
  return <div>Home Component</div>
})

const About = memo(() => {
  useLogCourse('About')
  return <div>About Component</div>
})

export default memo(() => {
  const [isShow, setIsShow] = useState(true)
  const changeIsShow = () => {
    setIsShow(!isShow)
  }

  return (
    <div>
      {isShow && <Home />}
      {isShow && <About />}
      <button onClick={changeIsShow}>显示/隐藏</button>
    </div>
  )
})
