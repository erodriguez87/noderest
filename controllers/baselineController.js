const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Baseline
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findByPass: function(req, res) {
  //   db.Baseline
  //     .findById(req.params.pass)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    db.Baseline
    .deleteMany({})
      .then(db.Baseline.create(req.body)
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
    db.Baseline
      .deleteMany({})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
