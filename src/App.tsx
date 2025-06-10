import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import IdeasPage from './pages/IdeasPage'
import LoginPage from './pages/LoginPage'
// importa aquí todas tus páginas

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ideas" element={<IdeasPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* añade el resto de rutas */}
    </Routes>
  )
}
