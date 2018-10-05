const router = require("express").Router();
const baselineController = require("../../controllers/baselineController");

// Matches with "/api/responses"
router.route("/")
  .get(baselineController.findAll)
  .post(baselineController.create)
  .delete(baselineController.remove);


module.exports = router;
