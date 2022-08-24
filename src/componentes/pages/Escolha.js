import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

import fundo from '../../assets/img/fundoEscolha.png'
import adicionar from '../../assets/img/Adicionar.png'
import produtos from '../../assets/img/Produtos.png'
import maiorestoque from '../../assets/img/MaiorEstoque.png'
import maiorvalor from '../../assets/img/MaiorValor.png'
import Navbar from '../layout/Navbar'
import { Link } from 'react-router-dom'

function Escolha() {
  return (
    <div className="container">
      <Navbar />
      <div style={{ display: 'flex' }}>
        <img
          src={fundo}
          style={{ width: 650, height: 370, marginTop: 150, marginRight: 100 }}
        />

        <div
          style={{ display: 'flex', flexDirection: 'column', marginTop: 120 }}
        >
          <div>
            <Link to="/produtos/add" className="btn btn-outline-light w-20">
              <img src={adicionar} style={{ width: 210, height: 200 }} />
            </Link>
            <Link to="/produtos" className="btn btn-outline-light w-20">
              <img src={produtos} style={{ width: 210, height: 200 }} />
            </Link>
          </div>
          <div>
            <Link
              to="/ProdutosMaisEstoque"
              className="btn btn-outline-light w-20"
            >
              <img src={maiorestoque} style={{ width: 210, height: 200 }} />
            </Link>
            <Link
              to="/ProdutosMaisCaros"
              className="btn btn-outline-light w-20"
            >
              <img src={maiorvalor} style={{ width: 210, height: 200 }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Escolha
