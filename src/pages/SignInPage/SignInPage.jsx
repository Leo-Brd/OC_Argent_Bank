import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, fetchProfile, selectAuthStatus, selectAuthError } from '../../store'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const status = useSelector(selectAuthStatus)
  const error = useSelector(selectAuthError)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await dispatch(login({ email, password, rememberMe }))
    if (login.fulfilled.match(result)) {
      await dispatch(fetchProfile())
      navigate('/profile')
    }
  }

  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {error && <p style={{ color: 'red', textAlign: 'left' }}>{error}</p>}
            <button
              type="submit"
              className="sign-in-button"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SignInPage
