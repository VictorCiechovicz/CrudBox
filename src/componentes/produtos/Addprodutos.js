import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const baseUrl = 'http://localhost:3001/produtos'

const Addprodutos = () => {
  const navigate = useNavigate()
  const [produtos, setProdutos] = useState({
    codigo: '',
    nome: '',
    preco: '',
    vendas: '',
    descricao: ''
  })

  const { codigo, nome, preco, vendas, descricao } = produtos
  const onInputChange = e => {
    setProdutos({ ...produtos, [e.target.name]: e.target.value })
  }

  /* const salvaProduto = () => {
    if (produtos !== '') {
      setProdutos(...produtos)
    }
  }*/
  const onSubmit = async e => {
    e.preventDefault()
    await axios.post(baseUrl, produtos)
    navigate('/produtos')
  }

  const resetForm = () => {
    setProdutos({
      codigo: '',
      nome: '',
      preco: '',
      vendas: '',
      descricao: ''
    })
  }
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5 m-5">
        <h2 className="text-center mb-4">Adicionar novo produto</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Código
            </label>
            <input
              type="text"
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
              type="text"
              className="form-control"
              name="preco"
              value={preco}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Quantidade de Vendas
            </label>
            <input
              type="text"
              className="form-control"
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
              type="text"
              className="form-control"
              name="descricao"
              value={descricao}
              onChange={e => onInputChange(e)}
            />
          </div>

          <button type="submit" className="btn btn-primary ">
            Salvar
          </button>
          <button
            value="Reset"
            type="reset"
            className="btn btn-primary "
            style={{ marginLeft: 10, backgroundColor: 'red' }}
            onClick={() => {
              resetForm()
            }}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  )
}
export default Addprodutos
