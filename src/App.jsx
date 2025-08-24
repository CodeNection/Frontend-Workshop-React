import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PersonalInfo } from './pages/PersonalInfo'
import { SelectRole } from './pages/SelectRole'
import { Tinder } from './pages/Tinder'

export default function App() {
  return (
    <main className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto">
        <Router>
          <Routes>
            <Route path="/" element={<PersonalInfo />} />
            <Route path="/role" element={<SelectRole />} />
            <Route path="/tinder" element={<Tinder />} />
          </Routes>
        </Router>
      </div>
    </main>
  )
} 

