/* * */
/* * */
/* * * * * */
/* ERROR REPORTING */
/* * */

module.exports = function (err, req, res, next) {
  console.log(err.message, err);
  res.status(500).send("API Error.");
};
