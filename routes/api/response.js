const router = require("express").Router();
const responseController = require("../../controllers/responseController");

// Matches with "/api/responses"
router.route("/")
  .get(responseController.findAll)
  // .post(responseController.create)
  .delete(responseController.remove);

router.route("/:pass")
  .get(responseController.findByPass)
  .post(responseController.create)
  .delete(responseController.remove);

module.exports = router;
