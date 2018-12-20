var survey = require("./friends");

module.exports = function (app){
    app.get("./survey", function(request, response){
        response.JSON(survey);
    });
};

// app.post("/survey", function(request, response){
//     for (var i = 0; i , response[i].scores.length; i++ )
//      if()
//      return
// });