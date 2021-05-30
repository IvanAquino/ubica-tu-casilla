const mongoose = require('mongoose')
const config = require('../config')

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(config.database.connection, { useNewUrlParser: true });

const pointSchema = mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const votingBoxSchema = mongoose.Schema({
  id: { type: String },
  active: { type: Boolean },
  type: { type: String },
  domicilio: { type: String },
  ubicacion: { type: String },
  referencia: { type: String },
  name: { type: String },
  alias: { type: String },
  location: { type: pointSchema },
  state: { type: Number },
  section: { type: Number },
});

const VotingBoxModel = mongoose.model('casillas', votingBoxSchema);

module.exports = {
  VotingBoxModel,
}
