var path = require("path");

module.exports = function (app) {

  app.get("/survey", function (req, res) {
    console.log("survey page")
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.get("*", function (req, res) {
    console.log("home")
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });


};
