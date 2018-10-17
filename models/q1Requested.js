const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// creating the request schema, this can change but it requires a restart of the server
const Q1RequestSchema = new Schema({
  Pass: { type: String, required: true },
  Model: { type: String, required: true },
  data: [[]]
});

// This creates our model from the above schema, using mongoose's model method
const Q1Requested = mongoose.model("q1Requested", Q1RequestSchema);

// Export the Library model
module.exports = Q1Requested;
