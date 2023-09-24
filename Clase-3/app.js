const express = require('express') // require -> commonJS
const crypto = require('node:crypto')
const movies = require('./movies.json')
const { validateMovie } = require('./schemas/movies')

const app = express()
app.use(express.json())
app.disable('x-powered-by')// desabilita el header X-Powered-By: Express

app.get('/', (req, res) => {
  // leer el query param de format
  res.json({ message: 'hola mundo' })
})

// todos los recursos que sean movies se identifican con /movies
app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filterMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filterMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => { // path-to-regexp
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)

  res.status(404).json({ message: 'Movie not found' })
})

app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)

  if (result.error) {
    // 422 Unprocessable Entity
    return res.status(400).json({
      error: JSON
        .parse(result.error.message)
    })
  }

  const newMovie = {
    id: crypto.randomUUID(), // uuid v4
    ...result.data
  }

  // esto no sería rest, porque estamos guardando
  // el estado de la aplicación en memoria
  movies.push(newMovie)
  res.status(201).json(newMovie)// actualizar la caché del cliente
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})
