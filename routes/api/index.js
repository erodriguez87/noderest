const router = require("express").Router();
const requestRoutes = require("./request");
const q1requestRoutes= require("./q1request")
const responseRoutes = require('./response');
const baselineRoutes = require('./baseline');
const promoRoutes = require('./promo');

// Routes
router.use("/requests", requestRoutes);
router.use("/q1requests", q1requestRoutes);
router.use("/responses", responseRoutes);
router.use("/baseline", baselineRoutes);
router.use("/promo", promoRoutes)


module.exports = router;
