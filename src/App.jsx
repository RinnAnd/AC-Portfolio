import { Route, Routes } from "react-router-dom"
import Andres from "./views/Andres/Andres"
import Logo from "./views/Logo/Logo"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Logo />} />
      <Route path="/andres" element={<Andres />} />
    </Routes>
  )
}

export default App
