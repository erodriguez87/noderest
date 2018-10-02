const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file sets up the response information

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mousetrap",
);

// Response information Section =====================================
  const requestSeed = [
    {
      Pass: "1",
      Model: "Deliveries",
      Data: [["9/1/2018", null, null],
       ["9/2/2018", null, null],
       ["9/3/2018", null, null],
       ["9/4/2018", null, null],
       ["9/5/2018", null, null],
       ["9/6/2018", null, null],
       ["9/7/2018", null, null],
       ["9/8/2018", null, null],
       ["9/9/2018", null, null],
       ["9/10/2018", null, null],
       ["9/11/2018", null, null],
       ["9/12/2018", "LowerFirstPayment", 5.0],
       ["9/13/2018", "LowerFirstPayment", 5.0],
       ["9/14/2018", "LowerFirstPayment", 5.0],
       ["9/15/2018", "LowerFirstPayment", 5.0],
       ["9/16/2018", "LowerFirstPayment", 5.0],
       ["9/17/2018", "LowerFirstPayment", 5.0],
       ["9/18/2018", "LowerFirstPayment", 5.0],
       ["9/19/2018", "LowerFirstPayment", 5.0],
       ["9/20/2018", "LowerFirstPayment", 5.0],
       ["9/21/2018", null, null],
       ["9/22/2018", null, null],
       ["9/23/2018", null, null],
       ["9/24/2018", null, null],
       ["9/25/2018", null, null],
       ["9/26/2018", null, null],
       ["9/27/2018", null, null],
       ["9/28/2018", null, null],
       ["9/29/2018", null, null],
       ["9/30/2018", null, null],
       ["10/1/2018", "SAC", null],
       ["10/2/2018", "SAC", null],
       ["10/3/2018", "SAC", null],
       ["10/4/2018", "SAC", null],
       ["10/5/2018", null, null],
       ["10/6/2018", null, null],
       ["10/7/2018", null, null],
       ["10/8/2018", null, null],
       ["10/9/2018", null, null],
       ["10/10/2018", null, null],
       ["10/11/2018", null, null],
       ["10/12/2018", null, null],
       ["10/13/2018", null, null],
       ["10/14/2018", null, null],
       ["10/15/2018", null, null],
       ["10/16/2018", null, null],
       ["10/17/2018", null, null],
       ["10/18/2018", null, null],
       ["10/19/2018", "RTB", null],
       ["10/20/2018", "RTB", null],
       ["10/21/2018", "RTB", null],
       ["10/22/2018", null, null],
       ["10/23/2018", null, null],
       ["10/24/2018", null, null],
       ["10/25/2018", null, null],
       ["10/26/2018", null, null],
       ["10/27/2018", null, null],
       ["10/28/2018", null, null],
       ["10/29/2018", null, null],
       ["10/30/2018", null, null],
       ["10/31/2018", null, null],
       ["11/1/2018", null, null],
       ["11/2/2018", null, null],
       ["11/3/2018", null, null],
       ["11/4/2018", null, null],
       ["11/5/2018", null, null],
       ["11/6/2018", null, null],
       ["11/7/2018", null, null],
       ["11/8/2018", null, null],
       ["11/9/2018", "ProductSpecial", null],
       ["11/10/2018", "ProductSpecial", null],
       ["11/11/2018", "ProductSpecial", null],
       ["11/12/2018", "ProductSpecial", null],
       ["11/13/2018", null, null],
       ["11/14/2018", null, null],
       ["11/15/2018", null, null],
       ["11/16/2018", null, null],
       ["11/17/2018", null, null],
       ["11/18/2018", null, null],
       ["11/19/2018", null, null],
       ["11/20/2018", null, null],
       ["11/21/2018", "LowerFirstPayment", 1.0],
       ["11/22/2018", "LowerFirstPayment", 1.0],
       ["11/23/2018", null, null],
       ["11/24/2018", null, null],
       ["11/25/2018", null, null],
       ["11/26/2018", null, null],
       ["11/27/2018", null, null],
       ["11/28/2018", null, null],
       ["11/29/2018", null, null],
       ["11/30/2018", null, null]]
    }
  ];

  db.Requested
    .remove({})
    .then(() => db.Requested.collection.insertMany(requestSeed))
    .then(data => {
      console.log(requestSeed.length + " Requestinserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });



  