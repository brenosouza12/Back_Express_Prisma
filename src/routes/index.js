const { Router } = require('express')


const usersRoutes = require('./users.routes.js')


const routes = Router()


// Rotas dos controllers
routes.use('/users', usersRoutes)


module.exports = routes

