import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Ex1 from './pages/Ex1'

function App() {

  return (
  <>

  <Header />

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="ex1" element={<Ex1 />} />
</Routes>

<Footer />
  </>
  )
}

export default App