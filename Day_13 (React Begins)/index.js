const express = require('express');
const user1 = require('./Mock_DATA.json');
const path = require('path')
const f = require('fs')
const port = 2000;
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from express")
    res.end();
});

app.get('/users', (req, res) => {
    res.json(user1)
    res.end();
})
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = user1.find(
        user => user.id === id
    )
    res.end();
    return res.json(user);
});
// app.use(express.urlencoded.urlencoded({extended:false}))
app.post('/adduser', (req, res) => {
    const data = req.body;
    console.log('data' + data);

    user1.push({ data, id: user1.length + 1 });
    f.writeFile('./Mock_Data.JSON',
        JSON.stringify(user1), (err) => {
            console.log(err);

        })
    return res.json("Data Added")
})
app.put('/modify/:id', (req, res) => {
    const id = Number(req.params.id);
    const userIndex = user1.findIndex(
        user => user.id === id)
    const updateduser = req.body;
    const updatedUser = {
        ...updateduser,
        id: id
    };
    user1[userIndex] = updatedUser;
    res.json(updatedUser);
    console.log(id+" Has been Modified");
    

})
app.get('/aboutus', (req, res) => {
    const t = path.join(__dirname, 'aboutus.html');
    console.log(t);
    res.sendFile(t);
});

app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const userIndex = user1.findIndex(
        user => user.id === id
    )
    if (userIndex === -1)
        return res.status(404).send('Data not found');

    const deletedItem = user1.splice(userIndex, 1);
    res.end();
    return res.json("Deleted");
});
app.listen(port)// 
console.log("From Start Script ");