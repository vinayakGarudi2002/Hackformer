const mongoose = require('mongoose');
const { Schema } = mongoose;
const EventSchema = new Schema({
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
  },
  event_name: {
      type: String,
      required: true
  },
  name_host: {
      type: String,
      required: true
  },
  place: {
      type: String,
      required: true
  },
  limit: {
      type: Number,
      required: true
  },
  category: {
      type: String,
      required: true
  },
  contact: {
      type: String,
      required: true
  },
  description: {
      type: String,
      required: true
  },
  images: {
      type: [String],
      required: true
  },
  budget: {
      type: Number,
      required: true
  },
  price: {
    type: Number,
    required: true
},
  verification_status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending'
  },
  no_people: {
      type: Number,
      default: 0
  },
  people: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
  }],
  date: {
      type: String,
      required: true
  }
});


const HostEventModel = mongoose.model('hostEvent', EventSchema);

module.exports = HostEventModel;
