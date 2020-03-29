const express = require('express');
const router = express.Router();
const messageController = require('../../../controllers/api/v1/messages');

// GET /api/v1/messages
router.get('/', messageController.getAll);

// GET /api/v1/messages/:id
router.get('/:id', messageController.get);

// POST /api/v1/messages
router.post('/', messageController.create);

// PUT /api/v1/messages/:id
router.put('/:id', messageController.update);

// DELETE /api/v1/messages/:id
router.delete('/:id', messageController.remove);

module.exports = router;