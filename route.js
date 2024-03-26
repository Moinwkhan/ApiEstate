const express = require("express");
const {
  loginUser,
  signupUser,
  createProperty,
  getProperties,
  getPropertyById,
} = require("./control");
const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.post("/createproperty", createProperty);
router.get("/getproperty", getProperties);
router.get("/getproperty/:id", getPropertyById);
module.exports = router;
