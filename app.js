const express = require("express");

const usersDb = require('./dataBase/users.dataBase');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/users', (req, res) => {
    res.status(201).json(usersDb)
});

app.get('/users/:id', (req, res) => {
    const {id} = req.params;

    for (const user of usersDb) {

        if (usersDb[id-1].id === user.id){
            res.status(201).json(usersDb[id-1])
            break
        }
    }
});

app.post('/users', (req, res) => {
    const userInfo = req.body;
    usersDb.push(userInfo);

    res.json('Created');
});

app.put('/users/:id', (req, res) => {

    const newUserInfo = req.body;
    const {id} = req.params;

    usersDb[id - 1] = newUserInfo;

    res.status(201).json('Updated')
});

app.delete('/users/:id', (req, res) => {
    const {id} = req.params

    usersDb.splice(id-1, 1);
    res.json('Deleted')
})

app.listen(5000, () => {
    console.log('Server listen 5000!')
});