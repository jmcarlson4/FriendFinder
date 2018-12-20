var survey = require("./friends");

module.exports = function (app){
    app.get("./survey", function(request, response){
        response.JSON(survey);
    });
};

//app.post("/api/friends", function(request, response) {
// if()
// else{}
