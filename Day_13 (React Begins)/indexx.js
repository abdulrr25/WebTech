let express = require('express')
let app = express()
app.set('views', './views');//  template different 
app.set('view engine', 'hbs');

app.listen(3000);


app.get("/Calc", (req, res) => {
    res.render("Calc")
})
app.use(express.urlencoded({ extended: true })); 

app.post("/docalculation", (req, res) => {

    let n1 = req.body.num1
    let n2 = req.body.num2
    let sum = parseInt(n1) + parseInt(n2)
    res.render("calc", { result: sum })
})
