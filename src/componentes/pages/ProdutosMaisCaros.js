import React, { useState, useEffect } from 'react'
import axios from 'axios'

const baseUrl = 'http://localhost:3001/produtos'

const ProdutosMaisCaros = () => {
  const [produtos, setProdutos] = useState([])
  const [maiorPreco, setMaiorPreco] = useState([])

  useEffect(() => {
    loadProdutos()
  }, [])

  useEffect(() => {
    setMaiorPreco(produtos.sort((a, b) => b.preco - a.preco))
    }, [produtos])

  const loadProdutos = async () => {
    const result = await axios.get(baseUrl)
    setProdutos(result.data)
  }

  return (
    <div className="container">
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
            {maiorPreco.map((produtos, index) => (
              <tr key={produtos.id}>
                <th scope="row">{index + 1}</th>
                <td>{produtos.codigo}</td>
                <td>{produtos.nome}</td>
                <td>{produtos.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProdutosMaisCaros
