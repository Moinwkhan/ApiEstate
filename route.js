const express = require("express");
const { createProperty, getProperties, getPropertyById } = require("./control");
const router = express.Router();

router.post("/createproperty", createProperty);
router.get("/getproperty", getProperties);
router.get("/getproperty/:id", getPropertyById);
module.exports = router;
