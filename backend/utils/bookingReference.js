const { v4: uuidv4 } = require('uuid');

exports.generateBookingReference = () => {
  return uuidv4();
};