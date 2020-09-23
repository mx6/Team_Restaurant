// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// (DATA)
// =============================================================
var reservations = [
    {
        id: "",
        name: "",
        email: "",
        phone: ""
    }
];

var waitList = [
    {
        id: "",
        name: "",
        email: "",
        phone: ""
    }
];

// Routes (express creates routes)
// ===========================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays a single character, or returns false
app.get("/api/reserve/:reservations", function(req, res) {
    var chosen = req.params.reserve;

    console.log(chosen);

    for (var i = 0; i < reservations.length; i++) {
        if (chosen === reservations[i].id) {
            return res.json(reservations[i]);
        }
    }

    return res.json(false);
});

// Create New Characters - takes in JSON input
// ===========================================================
app.post("/api/reserve", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    tables.push(newReservation);
  
    res.json(newReservation);
  });

// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);

});
