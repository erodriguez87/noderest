const db = require("../models");
const exec = require("ssh-exec");

function sshfunc() {
  exec('sh AI_as_bash.bash', {
    user:'dave',
    host:'10.142.0.5',
    key: "./scripts/generatedtestrsa",
    password:''
  }).pipe(process.stdout)
}
//Defining methods for the requestsController
module.exports = {
  findAll: function(req, res) {
    db.Requested
      .find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByPass: function(req, res) {
    console.log(req.params.pass)
    db.Requested
      .findOne({Pass:req.params.pass})
      .findOneAndRemove({"Pass":req.params.pass})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Requested
    .create(req.body)
    .then(sshfunc())
    .then(console.log('request post from excel'))
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  // update: function(req, res) {
  //   db.Beer
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  remove: function(req, res) {
    db.Requested
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
