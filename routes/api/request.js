const router = require("express").Router();
const requestsController = require("../../controllers/requestsController");

// Matches with "/api/request"
router.route("/request")
  .get(requestsController.findAll)
  .post(requestsController.create)
  .delete(requestsController.remove);

module.exports = router;
