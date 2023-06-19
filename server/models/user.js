const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    //ask about it//
    message: {
      type: Array,
      required: false,
    },

    role: {
      type: Number,
      required: true,
    },

    providersId: {
      type: Array,
      required: false,
    },
  },
  { timestamp: true }
)

module.exports = mongoose.model('User', userSchema);
