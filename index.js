const bodyParser    = require('body-parser');
const express       = require("express");
const app           = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.redirect("home");
});

app.get("/home", function (req, res) {
    res.render("home");
});

app.get("/home/articles", function(req, res) {
    res.render("articles");
})

app.get("/home/projects", function (req, res) {
    res.render("projects");
})

app.get("/home/contact", function (req, res) {
    res.render("contact");
})



app.listen(8080 || process.env.Port, function () {
    console.log('Server is running mate!!');
});