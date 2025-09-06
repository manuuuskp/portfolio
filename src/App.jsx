import './App.css'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import MainBoard from './components/MainBoard'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<MainBoard />} />
          <Route path="/about" element={<div>About</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
