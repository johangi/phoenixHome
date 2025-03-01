import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import TopBar from './common/TopBar/TopBar'
import Home from './pages/Home'
import NotFound from './pages/notFound'

function App() {

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
