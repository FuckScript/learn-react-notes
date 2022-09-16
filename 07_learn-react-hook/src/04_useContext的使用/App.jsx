import React, { useContext, memo } from 'react'
import { UserContext, ThemeContext } from './context'

const Hello = memo(() => {
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)

  return (
    <div>
      <p style={{ color: theme.color, fontSize: theme.fontSize }}>
        昵称: {user.nickname}, 等级: {user.level}
      </p>
    </div>
  )
})

function App() {
  return (
    <div>
      <UserContext.Provider value={{ nickname: 'Qiyana', level: 1207 }}>
        <ThemeContext.Provider value={{ color: 'red', fontSize: '20px' }}>
          <Hello />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default memo(App)
