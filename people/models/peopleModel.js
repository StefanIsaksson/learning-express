const mongoose = require('mongoose');

const { Schema } = mongoose;

const peopleModel = new Schema(
  {
    name: { type: String },
    born: { type: Number },
    died: { type: Number },
    occupation: { type: String },
    nationality: { type: String },
    description: { type: String },
    qoute: { type: String },
  }
);

module.exports = mongoose.model('People', peopleModel, 'people');