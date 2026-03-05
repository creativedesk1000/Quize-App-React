import { Navbar, Footer } from './components/Layout'
import { Hero, About } from './components/HeroAbout'
import { BreedsSection, ForSaleSection } from './components/BreedSale'
import { GallerySection, GuidesSection } from './components/GalleryGuides'
import { TestimonialsSection, ContactSection } from './components/TestimonialsContact'
import SocialFeed from './components/SocialFeed'

function App() {
  return (
    <div className="smooth-scroll bg-sand-50 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <BreedsSection />
        <ForSaleSection />
        <GallerySection />
        <SocialFeed />
        <GuidesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
