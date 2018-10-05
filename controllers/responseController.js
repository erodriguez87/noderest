const db = require("../models");

// Defining methods for the beersController
module.exports = {
  findAll: function(req, res) {
    db.Response
      .find()
      
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByPass: function(req, res) {
    db.Response
      .findById(req.params.pass)
      .then(db.Response.deleteOne(req.params.pass))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Response
    // .deleteMany({})
    .then(db.Requested.deleteOne({"Pass":req.params.pass}))
    .then(db.Response.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)));
  },
  // update: function(req, res) {
  //   db.Beer
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  remove: function(req, res) {
    db.Response
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
