const express = require("express")
const router = express.Router()

router.route("/").all((req, res)=>{
    res.render("./routes/kharboushe/index.ejs");
})

module.exports = router