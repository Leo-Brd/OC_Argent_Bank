import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from '../../store/authSlice'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Account from '../../components/Account/Account'

const accounts = [
  {
    title: 'Argent Bank Checking (x8349)',
    amount: '$2,082.79',
    amountDescription: 'Available Balance',
  },
  {
    title: 'Argent Bank Savings (x6712)',
    amount: '$10,928.42',
    amountDescription: 'Available Balance',
  },
  {
    title: 'Argent Bank Credit Card (x8349)',
    amount: '$184.30',
    amountDescription: 'Current Balance',
  },
]

function UserPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { token, user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!token) {
      navigate('/login')
      return
    }
    if (!user) {
      dispatch(fetchProfile())
    }
  }, [token, user, dispatch, navigate])

  if (!token) return null

  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{user ? `${user.firstName} ${user.lastName}` : ''}!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {accounts.map((account) => (
          <Account
            key={account.title}
            title={account.title}
            amount={account.amount}
            amountDescription={account.amountDescription}
          />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default UserPage
