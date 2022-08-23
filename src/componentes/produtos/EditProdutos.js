import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Editprodutos = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [produtos, setProdutos] = useState({
    codigo: '',
    nome: '',
    descricao: ''
  })

  const { codigo, nome, descricao } = produtos
  const onInputChange = e => {
    setProdutos({ ...produtos, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    loadProdutos()
  }, [])

  const onSubmit = async e => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/produtos/${id}`, produtos)
    navigate('/produtos')
  }

  const loadProdutos = async () => {
    const result = await axios.get(`http://localhost:3001/produtos/${id}`)
    setProdutos(result.data)
  }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5 m-5">
        <h2 className="text-center mb-4">Editar produto</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Código
            </label>
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Codigo do Produto"
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
                className="form-control form-control-lg"
                placeholder="Nome do Produto"
                name="nome"
                value={nome}
                onChange={e => onInputChange(e)}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Descricao
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Descricao do Produto"
              name="descricao"
              value={descricao}
              onChange={e => onInputChange(e)}
            />
          </div>

          <button className="btn btn-warning btn-block">Update Produto</button>
        </form>
      </div>
    </div>
  )
}
export default Editprodutos
