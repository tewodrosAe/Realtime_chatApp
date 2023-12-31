import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthPage from './pages/AuthPage'
import ChatsPage from './pages/ChatsPage'

function App() {
  const [user, setUser] = useState(undefined)
  useEffect(() => {
    const users = localStorage.getItem('user')
    if (users) {
      setUser(JSON.parse(users))
    }
  }, [])
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />
  } else {
    localStorage.setItem('user', JSON.stringify(user))
    return <ChatsPage user={user} />
  }
}

export default App
