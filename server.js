// Dependencies
// ===========================================================
var express = require("express");

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
]

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



// Listener
// ===========================================================
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
    });
  
