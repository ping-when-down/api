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
  const allWebsites = await Website.find({});
  res.send(allWebsites);
});

/* * */
/* * */
/* * * * * */
/* GET method for [/websites/:id] */
/* Responds with website objects that match the requested url. */
router.get("/:id", async (req, res) => {
  const requestedWebsite = await Website.findById(req.params.id);
  res.send(requestedWebsite);
});

/* * */
/* * */
/* * * * * */
/* POST method for [/websites] */
/* Create a new website object. */
router.post("/", async (req, res) => {
  const createdWebsite = await Website.create({
    title: req.body.title,
    active: req.body.active,
    index: req.body.index,
    https: req.body.https,
    host: req.body.host,
  });
  res.send(createdWebsite);
});

/* * */
/* * */
/* * * * * */
/* PUT method for [/websites] */
/* Create a new website object. */
router.put("/:id", async (req, res) => {
  const modifiedWebsite = await Website.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.send(modifiedWebsite);
});

/* * */
/* * */
/* * * * * */
/* DELETE method for [/websites] */
/* Delete an existing website object. */
router.delete("/:id", async (req, res) => {
  const deletedWebsite = await Website.findByIdAndDelete(req.params.id);
  res.send(deletedWebsite);
});

/* * */
/* Export router for [/websites/] */
module.exports = router;
