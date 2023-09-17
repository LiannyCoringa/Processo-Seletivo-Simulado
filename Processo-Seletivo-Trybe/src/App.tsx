import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Favorits from './pages/Favorits'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/favorits" element={ <Favorits /> } />
    </Routes>
  )
}

export default App
