// #1 Importar express
const express = require('express')

// Importar las de mi vista Home
const homeRoutes = require('./routes/homeRoutes')

const PORT = process.env.PORT || 3000

// #2 Crear mi instancia en Express
const app = express()

// #3 Configurar Express para que entienda JSON y datos de formularios
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// #4 Crear o definir mis rutas
app.use('/api/v1', homeRoutes)

// #5 Levantar el servidor escuchando un puerto, por ejemplo el 3000
app.listen(PORT, () => {
  console.log('Servidor escuchando en http://localhost:3000 🚀')
})
