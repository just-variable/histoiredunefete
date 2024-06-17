const express = require("express");
const app = express();
const port = 3000;

const logger = (req, res, next) => {
    if (req.url !== "/favicon.ico/") {
        console.log(`${req.method} => "${req.url}"`);
    }
    next();
}

// require("./databaseInit")

app.set('view-engine', 'ejs');
app.set('views', __dirname, '/routes');

app.use(express.urlencoded({ extended: false }));
app.use(logger);

const err404 = require("./routes/error404/route");
const home = require("./routes/home/route");
const kharboushe = require("./routes/kharboushe/route");
const team = require("./routes/team/route");
const aboutus = require("./routes/aboutus/route")


app.use("/", [express.static("./static"), home])
app.use("/kharboushe", [express.static("./static"), kharboushe])
app.use("/team", [express.static("./static"), team])
app.use("/aboutus", [express.static("./static"), aboutus])

app.use("*", err404);

app.listen(port, () => {
    console.log(`Listening on port :${port}`);
})