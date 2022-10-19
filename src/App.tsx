import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AirportDetailPage } from './pages/AirportDetailPage'
import { AuthPage } from './pages/AuthPage'
import { MainPage } from './pages/MainPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <MainPage />} />
        <Route path="/auth" element={ <AuthPage />} />
        <Route path="/airport/:id" element={ <AirportDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
