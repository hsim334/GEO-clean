import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EvidenceMainstream from './components/EvidenceMainstream'
import EvidenceRanking from './components/EvidenceRanking'
import Methodology from './components/Methodology'
import TrustSection from './components/TrustSection'
import Timeline from './components/Timeline'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <EvidenceMainstream />
        <EvidenceRanking />
        <Methodology />
        <TrustSection />
        <Timeline />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
