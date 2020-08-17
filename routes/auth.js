/* * */
/* IMPORTS */
const router = require("express").Router();
const Account = require("../models/Account");

/* * */
/* * */
/* * */
/* * * * * */
/* ENDPOINT FOR 'auth' */
/* * */
/* * */

/* * */
/* * */
/* * * * * */
/* GET method for [/auth] */
router.get("/", async (req, res) => {
  res.send("Not yet implemented.");
});

/* * */
/* Export router for [/auth/] */
module.exports = router;
