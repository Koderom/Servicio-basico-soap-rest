const express = require('express');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const users = require('./models/User')
const app = express();

// Coonfiguraciones 
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
app.use(express.urlencoded());
app.use(express.json());

// rutas
console.log(users);

app.post('/api/login', (req, res) => {
    const userID = usuarioValido(req.body.name, req.body.password);
    const user = users.get(userID);
    if(userID){
        const token = jwt.sign({user}, 'clave_secreta');
        res.json({
            token,
            user : {
                id: userID,
                userData : user
            }
        });
    }else{
        res.sendStatus(403);
    }
});

app.get('/api/deuda', ensureToken, (req, res) => {
    jwt.verify(req.token, 'clave_secreta', (err, data) => {
        if(err){
            res.sendStatus(403);
        }else{
            let deuda = users.get(req.body.id).deuda;
            res.json({
                text: "protected",
                deuda: deuda
            });
        }
    });
});

function ensureToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

function usuarioValido(name, password){
    let userID = null;
    users.forEach( (value, key) => {
        if(name === value.name && password == value.password) userID = key;
    });
    return userID;
}
// iniciando el servidor, escuchando
app.listen(app.get('port'), () => {
    console.log(`El servidor esta escuchando en el puerto ${app.get('port')}`);
});