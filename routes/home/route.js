const express = require("express")
const router = express.Router()

router.route("/").all((req, res)=>{
    res.render("./routes/home/index.ejs");
})

module.exports = router