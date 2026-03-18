const express = require('express');
const store = require('./src/store.js')

var app = express();

app.use(express.static('public'));

const portAvailable = process.env.PORT || 3000
app.listen(portAvailable, function () {
    console.log('Listening on port ' + portAvailable);
});

app.get('/api/name', function (req, res) {
    store.getListEvent((result) => {
        const randomMovie = between(0, result.names.length - 1);
        const randomcharacter = between(0, result.names[randomMovie].characters.length - 1);
        const entry = result.names[randomMovie];
        res.json({
            name: entry.characters[randomcharacter],
            movie: entry.movie || entry.book,
            type: entry.book ? 'book' : 'movie',
            reference: entry.reference || null,
        });
    })
});

function between(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}
