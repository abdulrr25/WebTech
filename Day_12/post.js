const f = require("http")
f.createServer((req,res) =>{ 
    console.log("Method " +req.method)
    if(req.method==='POST'){
        res.write("post method")
    }
    
    else{
        res.write("get method")
    }
    res.end();
})
.listen(4200,()=>{console.log("Server Started");

})