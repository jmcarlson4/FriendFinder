var survey = require("./friends");

module.exports = function (app) {
    app.get("/survey", function (request, response) {
        response.JSON(survey);
    });
};
module.exports = function (app) {
    app.post("/survey", function (request, response) {
        friends.push(req.body);
    })
};

module.exports = function (app) {
    app.get("/friends", function (request, response) {
        response.JSON(people);
    });
};

module.exports = function (app) {
    app.post("/friends", function (request, response) {
        //Need for loop to compare all scores to find best match

        friends.push(req.body);
    })
};