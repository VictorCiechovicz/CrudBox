import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const baseUrl = 'http://localhost:3001/produtos'

const Deshboard = () => {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    loadProdutos()
  }, [])

  const loadProdutos = async () => {
    const result = await axios.get(baseUrl)
    setProdutos(result.data)
  }

  return (
    <div className="container">
      <div className="py-4">
        <h2>Produtos mais Caros</h2>
        <table class="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">Posição</th>
              <th scope="col">Código</th>
              <th scope="col">Nome</th>
              <th scope="col">Preco</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produtos, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{produtos.codigo}</td>
                <td>{produtos.nome}</td>
                <td>{produtos.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Produtos com mais Estoque</h2>
        <table class="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">Posição</th>
              <th scope="col">Código</th>
              <th scope="col">Nome</th>
              <th scope="col">Quant.Estoque</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produtos, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{produtos.codigo}</td>
                <td>{produtos.nome}</td>
                <td>{produtos.estoque}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Deshboard
