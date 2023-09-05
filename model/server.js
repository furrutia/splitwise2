const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT || 8080
        this.usuariosPath = '/api/usuarios'
        this.grupoPath = '/api/grupo'

        // Middlewares
        this.middlewares()

        // Routes
        this.routes()
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
        this.app.use(this.grupoPath, require('../routes/grupo'))
    }

    middlewares() {

        //cors
        this.app.use(cors())
        
        // Body parse and read
        this.app.use(express.json())

        // Public directory
        this.app.use(express.static('public'))

    }
    
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}.`)
        })
    }

}

module.exports = Server