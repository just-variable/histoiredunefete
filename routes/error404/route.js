const express = require("express")
const router = express.Router()

router.route("/").all((req,res)=>{
    res.send("Error 404");
})

module.exports = router