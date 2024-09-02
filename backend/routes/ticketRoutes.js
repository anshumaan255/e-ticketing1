const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const auth = require('../middlewares/auth');

router.post('/book', auth, ticketController.bookTicket);
// Add more ticket routes...

module.exports = router;