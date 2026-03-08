const express= require("express")
const router = express.Router()
router.get("/courses",(req,res)=>{
    res.send("Courses route working")
})
module.exports=router
