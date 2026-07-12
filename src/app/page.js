import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Highlights from '@/components/Highlights'
import About from '@/components/About'
import Faq from '@/components/Faq'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Highlights />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
