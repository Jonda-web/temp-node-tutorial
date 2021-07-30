//dot notation

const { KeyObject } = require("crypto");

const person = {
    name: 'alex',
}
console.log(person.name);
person.age = 25;
console.log(person);

// square bracket notation

const items = {
    'featured-items': ['item1', 'item2']
}

console.log(items["featured-items"]);

let appState = 'loading';

const app = {
    [appState]: true
}

const state = {
    loading: true,
    name: '',
    job: ''
}

function updateState(key, value) {
    state[key] = value;
};

updateState('loading', false)
updateState('name', 'Alex')


console.log(state)
