const {readFile} = require('fs');
const { reject } = require('lodash');
const { resolve } = require('path');


const getText = (path) => {
    return new Promise()
}


readFile('./content/first.txt', utf8, (err, data) => {
    if(err) {
        reject(err);
    } else {
        resolve(data)
    }
})