"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");
router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

router.get("*", function(req, res){
  res.send("Not found");
})

module.exports = router;