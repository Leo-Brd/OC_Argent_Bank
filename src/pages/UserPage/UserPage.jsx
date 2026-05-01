import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile, updateProfile, selectToken, selectUser } from '../../store'
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
  const token = useSelector(selectToken)
  const user = useSelector(selectUser)
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    if (!token) {
      navigate('/login')
      return
    }
    if (!user) {
      dispatch(fetchProfile())
    }
  }, [token, user, dispatch, navigate])

  const handleEditClick = () => {
    setFirstName(user?.firstName || '')
    setLastName(user?.lastName || '')
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    const result = await dispatch(updateProfile({ firstName, lastName }))
    if (updateProfile.fulfilled.match(result)) {
      setIsEditing(false)
    }
  }

  if (!token) return null

  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <div className="header">
          {isEditing ? (
            <>
              <h1>Welcome back</h1>
              <form className="edit-name-form" onSubmit={handleSave}>
                <div className="edit-name-inputs">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="edit-name-input"
                  />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="edit-name-input"
                  />
                </div>
                <div className="edit-name-buttons">
                  <button type="submit" className="edit-name-btn">Save</button>
                  <button type="button" className="edit-name-btn" onClick={handleCancel}>Cancel</button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h1>Welcome back<br />{user ? `${user.firstName} ${user.lastName}` : ''}!</h1>
              <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
            </>
          )}
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
