import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import SignInPage from './pages/SignInPage/SignInPage'
import UserPage from './pages/UserPage/UserPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')

  const handleSignIn = (name) => {
    setIsLoggedIn(true)
    setUserName(name)
  }

  const handleSignOut = () => {
    setIsLoggedIn(false)
    setUserName('')
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} userName={userName} onSignOut={handleSignOut} />} />
        <Route path="/sign-in" element={<SignInPage onSignIn={handleSignIn} />} />
        <Route path="/user" element={<UserPage userName={userName} onSignOut={handleSignOut} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
