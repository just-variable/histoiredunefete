const express = require("express")
const app = express()
const port = 5000

const logger = (req, res, next) => {
    if (req.url !== "/favicon.ico/") {
        console.log(`${req.method} => "${req.url}"`)
    }
    next()
}

// require("./databaseInit")

app.set('view-engine', 'ejs')
app.set('views', __dirname, '/routes')

app.use(express.urlencoded({ extended: false }))
app.use(logger)


// const root = require("./routes/root/route")
const err404 = require("./routes/error404/route")
// const login = require("./routes/login/route")



// app.use("/", root)
// app.use("/login", [express.static("./routes/login"), login])

app.use("*", err404)

app.listen(port, () => {
    console.log(`Listening on port :${port}`)
})