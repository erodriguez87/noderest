const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// creating the request schema, this can change but it requires a restart of the server
const PromoSchema = new Schema({
  VersionKey: { type: String, required: true },
  data: [[]]
});

// This creates our model from the above schema, using mongoose's model method
const Promo = mongoose.model("Promo", PromoSchema);

// Export the Library model
module.exports = Promo;
