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

function UserPage({ userName, onSignOut }) {
  return (
    <>
      <Navbar isLoggedIn={true} userName={userName} onSignOut={onSignOut} />
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{userName}!</h1>
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
