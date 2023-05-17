const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [255, 'Name cannot be more than 255 characters'],
  },
});

module.exports = mongoose.model('Product', ProductSchema);
