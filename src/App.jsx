import { BrowserRouter, Routes,Route  } from "react-router-dom"
import Sorteo from "./components/sorteo"
import { Inicio } from "./components/inicio"
import NavMenu from "./components/navbar"
import Reglas from "./components/reglas"


function App() {

  return (
    <>
      <BrowserRouter>
      <NavMenu/>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/sorteo" element={<Sorteo />} />
          <Route path="/participar" element={<Reglas/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
