const Ticket = require('../models/ticket');
const Event = require('../models/event');
const { generateBookingReference } = require('../utils/bookingReference');

exports.bookTicket = async (req, res) => {
  try {
    const { eventId, userId } = req.body;
    const event = await Event.findById(eventId);
    if (event.availableTickets > 0) {
      const bookingReference = generateBookingReference();
      const ticket = new Ticket({ eventId, userId, bookingReference });
      await ticket.save();
      event.availableTickets--;
      await event.save();
      res.status(201).json({ bookingReference });
    } else {
      res.status(400).json({ message: 'No tickets available' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};