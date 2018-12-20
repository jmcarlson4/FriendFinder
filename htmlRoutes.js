
var path = require("path");

//routing
module.exports = function(app) {

  //html GET requests
  //handles when a user "visits" a page
  //below shows each page available
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });

  app.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
//default to home if no matching route 
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
}; 

    
