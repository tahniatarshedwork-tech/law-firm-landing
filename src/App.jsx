// App.jsx
// This is the root of your app. It imports and arranges all sections.
// Think of it as the table of contents for your page.

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureIcons from './components/FeatureIcons'

export default function App() {
  return (
    // min-h-screen ensures the dark background covers the full page
    <div className="min-h-screen bg-[#081120]">
      <Navbar />
      <Hero />
      <FeatureIcons />
    </div>
  )
}
