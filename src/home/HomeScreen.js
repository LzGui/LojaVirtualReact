import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import TextSite from './TextSite'
import CardCategoria from './CardCategoria'
import './HomeScreen.css'
import * as CategoriaApi from './CategoriaApi'

/*import appleImg from '../img/apple.png'
import playstationImg from '../img/playstation.png'
import windowsImg from '../img/windows.png'
import androidImg from '../img/android.png'*/

export default () => {

  const [listaCategorias, setListaCategorias] = useState([])

  useEffect(() => {
    carregarCategorias()
  }, []) //arrays vazio vai executar somente 1 vez

  const carregarCategorias = async () => {
    const categorias = await CategoriaApi.getAll()
    setListaCategorias(categorias)
  }

  return (
    <div data-testid='home-screen'>
      <Header />
      <section>
        <article>
          <TextSite />
        </article>
        <aside>
          {
            listaCategorias.map(categ =>
              <Link to={'/categorias/' + categ.id}>
                <CardCategoria
                  nome={categ.nome}
                  img={categ.img128}
                />
              </Link>)
          }

        </aside>
      </section>
      <Footer />
    </div>
  )
}