/* * */
/* * */
/* * * * * */
/* ACCOUNT */
/* * */

/* * */
/* IMPORTS */
const mongoose = require("mongoose");

/* * */
/* Schema for MongoDB ["Store"] Object */
module.exports = mongoose.model(
  "Account",
  new mongoose.Schema({
    username: {
      type: String,
      maxlength: 30,
      required: true,
    },
    password: {
      type: String,
      maxlength: 100,
      required: true,
    },
  })
);
