var survey = require("./friends");

module.exports = function (app) {
       app.get("/friends", function (request, response) {
           console.log(survey);
        response.json(survey);
    });
    app.post("/friends", function (request, response) {
        //Need for loop to compare all scores to find best match

        friends.push(request.body);
    })
};

