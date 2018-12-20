var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./apiRoutes")(app);
require("./htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  


// app.get("/", function (req, res) {
//         res.sendFile(path.join(__dirname, "index.html"));
//     });

// app.get("./survey", function (req, res) {
//     res.sendFile(path.join(__dirname, "./survey.html"));
// });




// app.post("/api/characters", function (req, res) {
//     var newPerson = req.body;
//     person.push(newPerson);

//     res.json(newPerson);
// });
