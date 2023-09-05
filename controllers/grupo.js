const response = require('express');

const grupoGet = (req, res = response) => {
    res.status(200).json({
        msg: 'GET grupo - Controller'
    })
}

const grupoPost = (req, res = response) => {

    const { nombre, tipo } = req.body

    res.status(200).json({
        msg: 'POST grupo - Controller',
        data: {
            nombre,
            tipo
        }
    })
}

const grupoPut = (req, res = response) => {
    res.status(200).json({
        msg: 'PUT grupo - Controller'
    })
}

const grupoDelete = (req, res = response) => {
    res.status(200).json({
        msg: 'DELETE grupo - Controller'
    })
}

const grupoPatch = (req, res = response) => {
    res.status(200).json({
        msg: 'PATCH grupo - Controller'
    })
}

module.exports = {
    grupoGet,
    grupoPost,
    grupoPut,
    grupoDelete,
    grupoPatch
}