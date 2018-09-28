const router = require("express").Router();
const requestRoutes = require("./request");
const responseRoutes = require('./response');

// Routes
router.use("/requests", requestRoutes);
router.use("/responses", responseRoutes);

module.exports = router;
