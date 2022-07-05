'use strict';

const fs = require('fs');

const NAMES_PATH = 'names.json';

exports.getListEvent = function (callback) {
    fs.readFile(NAMES_PATH, (err, content) => {
        if (err) return console.log('Error loading events file:', err);
        callback(JSON.parse(content));
    });
}