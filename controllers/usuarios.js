const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'Sin Nombre', apikey, page = 1, limit = 5 } = req.query

    res.status(200).json({
        msg: 'GET user - Controller',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usuariosPost = (req = request, res = response) => {

    const { nombre, edad } = req.body

    res.status(200).json({
        msg: 'POST user - Controller',
        data: {
            nombre,
            edad
        }
    })
}

const usuariosPut = (req = request, res = response) => {

    const { id } = req.params

    res.status(200).json({
        msg: 'PUT user - Controller',
        data: {
            id
        }
    })
}

const usuariosDelete = (req = request, res = response) => {
    res.status(200).json({
        msg: 'DELETE user - Controller'
    })
}

const usuariosPatch = (req = request, res = repsonse) => {
    res.status(200).json({
        msg: 'PATCH user - Controller'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}