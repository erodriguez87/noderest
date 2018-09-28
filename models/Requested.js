const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// creating the request schema, this can change but it requires a restart of the server
const RequestSchema = new Schema({
  Date: { type: String, required: true },
  PromoName: { type: String, required: true },
  PromoValue: {type: Number, required: true}
});

// This creates our model from the above schema, using mongoose's model method
const Requested = mongoose.model("Requested", RequestSchema);

// Export the Library model
module.exports = Requested;
