import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Dicas from '../pages/Dicas'
import Header from '../components/Header'
import Footer from '../components/Footer'

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dicas" element={<Dicas />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
