const express = require("express");

const hubsRouter = require("../hubs/hubs-router");

const router = express.Router();

router.use("/hubs", hubsRouter);
// Now we can add more paths
// router.use("/accounts", accountsRouter);

module.exports = router;