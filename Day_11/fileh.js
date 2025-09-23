const f = require ("fs")

f.writeFile("xyz.txt", "Hello", (err)=>{
    console.log(err)
})



f.readFile("xyz.txt", "utf8", (err,data)=>{
    if(err){
        console.log("Error occured" +err)
    }
    else{
        console.log(data)
    }
})