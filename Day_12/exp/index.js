const express=require('express');
const user1 = require('./Mock_DATA.json');
const port = 2500;
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello from express")
});

app.get('/users', (req,res)=>{
    res.json(user1)
})
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);  
    const user = user1.find(
        user => user.id === id
    )
    return res.json(user);
});
app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);  
    const userIndex = user1.findIndex(
        user => user.id === id
    )
    if (userIndex === -1)
        return res.status(404).send('Data not found');

    const deletedItem = user1.splice(userIndex, 1);
    return res.json("Delete");
});
res.end();
app.listen(port)// 
console.log("From Start Script ");