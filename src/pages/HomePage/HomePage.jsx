import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'

function HomePage({ isLoggedIn, userName, onSignOut }) {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} userName={userName} onSignOut={onSignOut} />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
