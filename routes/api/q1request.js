const router = require("express").Router();
const q1requestsController = require("../../controllers/q1requestsConstroller");

// Matches with "/api/request"
router.route("/")
  .get(q1requestsController.findAll)
  .post(q1requestsController.create)
  .delete(q1requestsController.remove);

router.route("/:pass")
  .get(q1requestsController.findByPass)
  .delete(q1requestsController.remove);

module.exports = router;
