import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Welcome to OctoFit Tracker</h2>
      <p>Track workouts, monitor progress, and manage your fitness goals.</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About OctoFit</h2>
      <p>Modern multi-tier fitness tracking with React, Express, TypeScript, and MongoDB.</p>
    </div>
  )
}

function App() {
  return (
    <div className="container py-5">
      <header className="mb-4">
        <h1>OctoFit Tracker</h1>
        <p className="text-muted">Modern multi-tier fitness tracking application</p>
        <nav className="mb-3">
          <NavLink className="btn btn-outline-primary me-2" to="/">
            Home
          </NavLink>
          <NavLink className="btn btn-outline-secondary" to="/about">
            About
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
