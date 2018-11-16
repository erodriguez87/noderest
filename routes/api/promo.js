const router = require("express").Router();
const promoController = require("../../controllers/promoController.js");

// Matches with "/api/responses"
router.route("/")
  .get(promoController.findAll)
  .post(promoController.create)
  .delete(promoController.remove);


module.exports = router;
