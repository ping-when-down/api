/* * */
/* IMPORTS */
const router = require("express").Router();
const Website = require("../models/Website");

/* * */
/* * */
/* * */
/* * * * * */
/* ENDPOINT FOR 'websites' */
/* * */
/* * */

/* * */
/* * */
/* * * * * */
/* GET method for [/websites] */
/* Responds with vehicle objects that match the requested route. */
router.get("/", async (req, res) => {
  // Query the database and get items matching the requested timeframe
  const websites = await Website.find({});

  res.send(websites);
});

/* * */
/* * */
/* * * * * */
/* GET method for [/websites/:url] */
/* Responds with website objects that match the requested url. */
router.get("/:url", async (req, res) => {
  res.send("Not yet implemented.");
});

/* * */
/* * */
/* * * * * */
/* POST method for [/websites] */
/* Create a new website object. */
router.post("/", async (req, res) => {
  res.send("Not yet implemented.");
});

/* * */
/* Export router for [/websites/] */
module.exports = router;