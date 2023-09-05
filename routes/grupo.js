const { Router } = require('express');
const { grupoGet, grupoPost, grupoPut, grupoDelete, grupoPatch } = require('../controllers/grupo');

const router = Router();

router.get('/', grupoGet)
router.post('/', grupoPost)
router.put('/:id', grupoPut)
router.delete('/', grupoDelete)
router.patch('/', grupoPatch)

module.exports = router;