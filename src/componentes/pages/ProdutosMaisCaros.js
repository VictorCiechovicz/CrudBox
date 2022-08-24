import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../layout/Navbar'

const baseUrl = 'http://localhost:3001/produtos'

const ProdutosMaisCaros = () => {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    loadProdutos()
  }, [])

  const produtosMaiorPreco = [...produtos].sort((a, b) => {
    return b.preco - a.preco
  })

  const loadProdutos = async () => {
    const result = await axios.get(baseUrl)
    setProdutos(result.data)
  }

  return (
    <div className="container">
      <Navbar />
      <div className="py-4">
        <h1>Produtos mais Caros</h1>
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">Posição</th>
              <th scope="col">Código</th>
              <th scope="col">Nome</th>
              <th scope="col">Preço</th>
            </tr>
          </thead>
          <tbody>
            {produtosMaiorPreco.map((produtos, index) =>
              index < 3 ? (
                <tr key={produtos.id}>
                  <th scope="row">{index + 1}º</th>
                  <td>{produtos.codigo}</td>
                  <td>{produtos.nome}</td>
                  <td>{produtos.preco}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProdutosMaisCaros
