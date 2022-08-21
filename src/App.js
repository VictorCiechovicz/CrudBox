import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Produtos from './componentes/pages/Produtos'
import Sobre from './componentes/pages/Sobre'
import Deshboard from './componentes/pages/Deshboard'
import Navbar from './componentes/layout/Navbar'
import PageNotFound from './componentes/pages/PageNotFound'
import Addprodutos from './componentes/produtos/Addprodutos'
import EditProdutos from './componentes/produtos/EditProdutos'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Deshboard />}></Route>
          <Route exact path="/produtos" element={<Produtos />}></Route>
          <Route exact path="/sobre" element={<Sobre />}></Route>
          <Route exact path="/produtos/add" element={<Addprodutos />}></Route>
          <Route
            exact
            path="/produtos/edit/:id"
            element={<EditProdutos />}
          ></Route>
          <Route exact path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
