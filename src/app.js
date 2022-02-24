const express = require("express");
const PostRouter = require("./router/post.routes");
require("./db");

const app = express();
app.use(express.json());

app.use("/posts", PostRouter)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

module.exports = app; 
