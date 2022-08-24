import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'

const baseUrl = 'http://localhost:3001/produtos'

const Produtos = () => {
  const [produtos, setProdutos] = useState([])
  const [itensPorPage, setItensPorPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(produtos.length / itensPorPage)
  const startIndex = currentPage * itensPorPage
  const endIndex = startIndex + itensPorPage
  const currentItens = produtos.slice(startIndex, endIndex)

  useEffect(() => {
    loadProdutos()
  }, [])

  const loadProdutos = async () => {
    const result = await axios.get(baseUrl)
    setProdutos(result.data)
  }

  const deleteProduto = async id => {
    await axios.delete(`http://localhost:3001/produtos/${id}`)
    loadProdutos()
  }
  return (
    <div className="container">
      <Navbar />

      <div className="py-4">
        <table class="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">#</th>
              <th scope="col">Código</th>
              <th scope="col">Nome</th>
              <th scope="col">Preço</th>
              <th scope="col">Q.Estoque</th>
              <th scope="col">Q.Vendas</th>
              <th scope="col">Descrição</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItens.map((produtos, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{produtos.codigo}</td>
                <td>{produtos.nome}</td>
                <td>{produtos.preco}</td>
                <td>{produtos.estoque}</td>
                <td>{produtos.vendas}</td>
                <td>{produtos.descricao}</td>
                <td>
                  <Link
                    to={`/produtos/edit/${produtos.id}`}
                    class="btn btn-outline-primary m-2"
                  >
                    Editar
                  </Link>
                  <Link
                    to="/produtos"
                    onClick={() => {
                      deleteProduto(produtos.id)
                    }}
                    class="btn btn-danger "
                  >
                    Excluir
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          
          {Array.from(Array(pages), (item, index) => {
            return (
              <button
                value={index}
                onClick={e => setCurrentPage(Number(e.target.value))}
              >
                {index + 1}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Produtos
