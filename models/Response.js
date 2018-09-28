const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// creating the request schema, this can change but it requires a restart of the server
const ResponseSchema = new Schema({
  Pass: { type: String, required: true },
  Model: { type: String, required: true },
  Data: []
});

// This creates our model from the above schema, using mongoose's model method
const Response = mongoose.model("Response", ResponseSchema);

// Export the Response model
module.exports = Response;
