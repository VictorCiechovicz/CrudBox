import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../layout/Navbar'

const baseUrl = 'http://localhost:3001/produtos'

const Addprodutos = () => {
  const navigate = useNavigate()

  const [produtos, setProdutos] = useState({
    codigo: '',
    nome: '',
    preco: '',
    estoque: '',
    vendas: '',
    descricao: ''
  })

  const { codigo, nome, preco, estoque, vendas, descricao } = produtos
  const onInputChange = e => {
    setProdutos({ ...produtos, [e.target.name]: e.target.value })
  }

  const onSubmit = async e => {
    e.preventDefault()
    await axios.post(baseUrl, produtos)
    navigate('/produtos')
  }

  useEffect(() => {
    loadProdutos()
  }, [])

  const loadProdutos = async () => {
    const result = await axios.get(baseUrl)
    setProdutos(result.data)
  }

  const resetForm = () => {
    setProdutos({
      codigo: '',
      nome: '',
      preco: '',
      estoque: '',
      vendas: '',
      descricao: ''
    })
  }
  return (
    <div className="container">
      <Navbar />
      <div className="w-75 mx-auto shadow p-4 m-4">
        <h2 className="text-center mb-4">ADICIONAR NOVO PRODUTO</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Código
            </label>
            <input
              required
              type="number"
              className="form-control"
              name="codigo"
              value={codigo}
              onChange={e => onInputChange(e)}
            />
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Nome
              </label>
              <input
                required
                type="text"
                className="form-control"
                name="nome"
                value={nome}
                onChange={e => onInputChange(e)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Preco
            </label>
            <input
              required
              type="number"
              className="form-control "
              name="preco"
              value={preco}
              onChange={e => onInputChange(e)}
            />
          </div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Estoque
          </label>
          <input
            required
            type="number"
            className="form-control"
            name="estoque"
            value={estoque}
            onChange={e => onInputChange(e)}
          />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Quantidade de Vendas
            </label>
            <input
              required
              type="number"
              className="form-control "
              name="vendas"
              value={vendas}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Descricao
            </label>
            <input
              required
              type="text"
              className="form-control"
              name="descricao"
              value={descricao}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div style={{ marginLeft: 350 }}>
            <button type="submit" className="btn btn-primary ">
              Salvar
            </button>
            <button
              value="Reset"
              type="reset"
              className="btn btn-light"
              style={{ marginLeft: 10 }}
              onClick={() => {
                resetForm()
              }}
            >
              Limpar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Addprodutos
