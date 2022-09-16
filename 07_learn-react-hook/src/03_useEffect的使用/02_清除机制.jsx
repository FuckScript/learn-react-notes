import React, { useState, useEffect, memo } from 'react'
import store from './store'

function App() {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {/* ... */})
    return () => unsubscribe()
  }, [])

  return <div>App</div>
}

export default memo(App)
