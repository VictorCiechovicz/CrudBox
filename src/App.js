import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './componentes/pages/Home'
import Sobre from './componentes/pages/Sobre'
import Produtos from './componentes/pages/Produtos'
import Navbar from './componentes/layout/Navbar'
import PageNotFound from './componentes/pages/PageNotFound'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/produtos" element={<Produtos />}></Route>
          <Route exact path="/sobre" element={<Sobre />}></Route>
          <Route exact path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
