import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Journey from '@/components/Journey'
import Certifications from '@/components/Certifications'
import Quiz from '@/components/Quiz'
import Hobbies from '@/components/Hobbies'
import Projects from '@/components/Projects'
import Pipeline from '@/components/Pipeline'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Certifications />
        <Quiz />
        <Hobbies />
        <Projects />
        <Pipeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
