import React from 'react'
import fundo from '../../assets/img/fundo.jpg'

const PaginaInicial = () => {
  return (
    <div>
      <img
        src={fundo}
        style={{ width: 650, height: 620, marginTop: 20, marginLeft: 300 }}
      />
    </div>
  )
}

export default PaginaInicial
