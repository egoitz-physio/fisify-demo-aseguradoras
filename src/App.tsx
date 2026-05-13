import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import AseguradoraApp from './pages/AseguradoraApp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AseguradoraApp />} />
        <Route path="/aseguradora" element={<AseguradoraApp />} />
        <Route path="/aig" element={<Navigate to="/aseguradora" replace />} />
        <Route path="/prudential" element={<Navigate to="/aseguradora" replace />} />
        <Route path="/zurich" element={<Navigate to="/aseguradora" replace />} />
        <Route path="/axa" element={<Navigate to="/aseguradora" replace />} />
        <Route path="/axa-keralty" element={<Navigate to="/aseguradora" replace />} />
        <Route path="*" element={<Navigate to="/aseguradora" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
