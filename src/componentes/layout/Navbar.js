import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PackageIcon } from '@primer/octicons-react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark container navbar-default custom">
      <div className="container-fluid">
        <a className="navbar-brand " href="/">
          <PackageIcon size={60} />
          CRUDBOX
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse size:10"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/ProdutosMaisEstoque"
              >
                Produtos Estoque
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/ProdutosMaisCaros"
              >
                Produtos Valor
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/produtos">
                Lista Produtos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/sobre">
                Sobre
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/produtos/add" className="btn btn-outline-light w-20">
          Adicionar Produto
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
