const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookingReference: { type: String, required: true, unique: true },
  purchaseDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);