import { useState, memo, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('Hello useState!')
  const changeMessage = () => setMessage('Hello Qiyana!')

  const [banners, setBanners] = useState([])
  useEffect(() => {
    
  })

  return (
    <div>
      <h4>App Component: {message}</h4>
      <button onClick={changeMessage}>修改文本</button>
    </div>
  )
}

export default memo(App)
