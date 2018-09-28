const router = require("express").Router();
const responseController = require("../../controllers/responseController");

// Matches with "/api/responses"
router.route("/")
  .get(responseController.findAll)
  .post(responseController.create)
  .delete(responseController.remove);

module.exports = router;
