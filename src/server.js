const express = require('express')


// Index das routes
const routes = require('./routes')


const app = express()
app.use(express.json())


app.use(routes)


const PORT = 3333
app.listen(PORT, () => console.log(`iolet, seu server esta rodando na porta ${PORT}`))

//Violet, seu server esta rodando na porta ${PORT}