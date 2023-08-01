var express = require("express")
var app = express()

app.use(express.static(__dirname+'/'))
var port = process.env.port || 3000;

app.listen(port,()=>{

    console.log("App listening to:"+port)
})

app.get("/powerOfaNumber",(req,res)=>{
    const m=parseInt(req.query.m)
    const n=parseInt(req.query.n)
    const ans=Math.pow(m,n)
    res.json({
        message:"success",
        status : 200,
        data : ans
    })
})