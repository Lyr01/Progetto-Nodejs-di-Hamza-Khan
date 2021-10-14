const express = require("express");
const app = express();
const cors = require("cors");

const { static } = require('express');
app.use('/images/', static('./images'));

app.use(express.json());
app.use(cors());



const db = require('./models');

// Routers
const imageRouter = require("./routes/Images");
app.use("/upload", imageRouter);

db.sequelize.sync().then(() => {
    app.listen(8080, () => {
        console.log("Server running on port 8080");
    });
});

