const express = require('express');
const subRouter = require("./subject");

const router = express.Router();

router.use("/subject", subRouter);

module.exports = router;