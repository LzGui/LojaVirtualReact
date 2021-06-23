const URL_BASE = 'https://lojavirtual-api--tarleylana.repl.co/api/v1/categorias'

const getAll = () => fetch(URL_BASE, { method: 'GET' })
  .then(res => res.json())
  .catch(err => console.error('Falha ao tentar obter categorias da base', err.message))

export {
  getAll
}