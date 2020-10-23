"use strict"
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.port || 3000


app.use(express.static(path.join(__dirname, "public")));

app.get("/users", (req, res) => {
    let users = [
        {
            first_name: "John",
            last_name: "Doe",
            age: 34,
            gender: "male"
        },

        {
            first_name: "Tom",
            last_name: "Jackson",
            age: 23,
            gender: "male"
        }
        

    ];

    res.jason(users);
    
})

app.get("/downloads", (req, res) => {

    res.download(path.join(__dirname, "/downloads/pdf.pdf"));
})


app.get("/about", (req, res) => {

    res.redirect("/about.html");
})




app.get("/about", (req, res) => {
    res.send("<h1>About<h1>");
});


app.post('/subscribe', (req, res) => {
    let name = req.body.name
    let email = req.body.email;

    console.log(name + ' has subscribed!')
})








app.listen(port, err => {
    if (err) {
        console.log("There was an error in connection", err);
        return;
    }
    console.log(`Listening on port ${port}`);
});
