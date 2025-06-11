// src/App.jsx
import { Routes, Route } from "react-router-dom"
import Navbar from "./assets/components/Navbar"
import HeroSection from "./assets/components/HeroSection"
import Events from "./pages/Events"
import CreateEvent from "./pages/CreateEvent"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/events" element={<Events />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Routes>
    </>
  )
}

export default App
