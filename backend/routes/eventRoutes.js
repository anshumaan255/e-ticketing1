const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const auth = require('../middlewares/auth');

router.get('/', eventController.getAllEvents);
router.post('/', auth, eventController.createEvent);
// Add more event routes...

module.exports = router