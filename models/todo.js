const mongoose = require('mongoose');

/* ------ Project Schema ------ */

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});


module.exports = mongoose.model('Todo', todoSchema);