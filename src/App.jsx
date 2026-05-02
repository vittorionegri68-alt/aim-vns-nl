// App.jsx — AI'm by VNS NL
import LangBanner from './components/LangBanner.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Resultaten from './components/Resultaten.jsx'
import Diensten from './components/Diensten.jsx'
import FAQ from './components/FAQ.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <LangBanner />
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Resultaten />
        <Diensten />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
