const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// creating the request schema, this can change but it requires a restart of the server
const BaselineSchema = new Schema({
  VersionKey: { type: String, required: true },
  data: [[]]
});

// This creates our model from the above schema, using mongoose's model method
const Baseline = mongoose.model("Baseline", BaselineSchema);

// Export the Library model
module.exports = Baseline;
