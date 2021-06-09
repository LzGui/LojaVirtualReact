import React from 'react'

import './TabelaCompras.css'

export default ({lista = []}) => (
  <table>
    <thead>
      <tr>
        <th>Imagem</th>
        <th>Nome</th>
        <th>Quantidade</th>
        <th>Preço</th>
        <th>Total</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
      lista.map(l => 
        <tr>
          <td>
            <img src={l.produto.img} alt={l.produto.nome}/>
          </td>
          <td>{l.nome}</td>
          <td>{l.quantidade}</td>
          <td>{l.preco}</td>
          <td>{l.quantidade * l.produto.preco}</td>
          <td><button>Remover</button></td>
        </tr>
      )
    }
    </tbody>
  </table>
)