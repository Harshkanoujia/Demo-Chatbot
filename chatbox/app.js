const express = require("express");
const path = require("path");
const app = express();

const bodyParser = require('body-parser');


const port = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(static_path)); 
app.use(express.static(path.join(__dirname, 'src')));
app.post("/login", loginUser);
app.set("view engine","hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);
app.use(express.static('public'));
app.get("/",(req, res) => {
    res.render("index")
})
app.get("/login",(req, res) => {
    res.render("login")
})
app.get("/signup",(req, res) => {
    res.render("signup")
})
app.get("/chatbox",(req, res) => {
  res.render("chatbox")
})
app.get("/script",(req, res) => {
  res.render("script")
})



app.get("/*",(req, res ) => {
    res.send("404 Error Page ")
})
app.listen(port, () => {
    console.log('server is running at port no ${port}');
});
