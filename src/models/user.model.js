const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
  },
  Email: {
    type: String,
  },
  Password: {
    type: String,
  },
  role: {
    type: String,
    enum: ['admin', 'customer'],
    required: true
  }
},
  {
    timestamps: true,
  });

const User = mongoose.model("User", userSchema);

module.exports = User;
