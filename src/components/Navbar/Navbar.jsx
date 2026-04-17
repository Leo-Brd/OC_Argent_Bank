import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'

function Navbar({ isLoggedIn, userName, onSignOut }) {
  const navigate = useNavigate()

  const handleSignOut = () => {
    if (onSignOut) onSignOut()
    navigate('/')
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLoggedIn ? (
          <>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {' '}{userName}
            </Link>
            <button className="main-nav-item" onClick={handleSignOut} style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold', color: '#2c3e50', fontSize: '1rem' }}>
              <i className="fa fa-sign-out"></i>
              {' '}Sign Out
            </button>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            {' '}Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
