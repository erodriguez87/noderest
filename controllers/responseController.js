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
      .findOne({Pass: req.params.pass})
      .findOneAndRemove({"Pass":req.params.pass})
      .then(console.log('request from excel' + req.params.pass))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Response
    // .deleteMany({})
    .create(req.body)
    .then(db.Requested.findOneAndRemove({"Pass":req.params.pass}))
      .then(dbModel => res.json(dbModel))
      .then(console.log('post from python' + req.params.pass))
      .catch(err => res.status(422).json(err));
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
