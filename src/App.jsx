import './App.css'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import MainBoard from './components/MainBoard'
import About from './components/About'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<MainBoard />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
