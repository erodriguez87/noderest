const router = require("express").Router();
const responseController = require("../../controllers/responseController");

// Matches with "/api/response"
router.route("/response")
  .get(responseController.findAll)
  .post(responseController.create)
  .delete(responseController.remove);

module.exports = router;
