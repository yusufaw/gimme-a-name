const express = require('express');
const store = require('./src/store.js')

var app = express();

const portAvailable = process.env.PORT || 3000
app.listen(portAvailable, function () {
    console.log('Listening on port ' + portAvailable);
});

app.get('/', function (req, res) {
    store.getListEvent((result) => {
        const randomMovie = between(0, result.names.length - 1);
        const randomcharacter = between(0, result.names[randomMovie].characters.length - 1);
        const nameResult = result.names[randomMovie].characters[randomcharacter];
        res.send(nameResult);
    })
});

function between(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}
