const { default: mongoose } = require('mongoose');

const CreditCardSchema = new mongoose.Schema({
  expMonth: {
    type: String,
    required: true,
    trim: true,
  },
  expYear: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  mask: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = {
  CreditCardSchema,
};
