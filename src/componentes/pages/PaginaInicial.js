import React from 'react'
import fundo from '../../assets/img/fundo.png'
import button from '../../assets/img/button.png'
import { Link, NavLink } from 'react-router-dom'

const PaginaInicial = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <img
        src={fundo}
        style={{ width: 670, height: 370, marginTop: 100, marginLeft: 320 }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 10
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 'bold', color: '#110875' }}>
          CRUDBOX
        </div>
        <div style={{ fontSize: 14, color: '#7C7C7C' }}>
          Crud para controle de estoque, desenvolvido com React.js e padrao de
          consumo de REST API.
        </div>
      </div>

      <div
        style={{
          marginLeft: 480,
          marginTop: 20
        }}
      >
        <Link to="/escolha">
          <img src={button} style={{ width: 345, height: 60 }} />
        </Link>
      </div>
    </div>
  )
}

export default PaginaInicial
