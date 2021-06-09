import React from 'react'
import {useHistory} from 'react-router-dom'

import './MenuCategorias.css'

export default ({lista=[]}) => {

  const history = useHistory()

  return (
    <ul class="menu">
      {
        lista.map(list => 
          <li class="menuitem" onClick={() => history.push('/categorias/' + list.id)}>
            {list.nome}
          </li>)
      }
    </ul>
  )
}