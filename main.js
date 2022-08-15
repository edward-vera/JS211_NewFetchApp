const fetch = require('node-fetch');
const { getHeapSpaceStatistics } = require('v8');

const url = 'api link needed here'

window.onload = function() {

    getSomething();
}

require('dotenv').config();

// console.log(process.env)

const api_key = process.env.SECRET_API_KEY

const api_public = process.env.SECRET_PUBLIC_KEY

const ts = new Date().getTime

console.log(api_key)
console.log(api_public)

window.onload = function() {

    getSomething();
}

const fetchStuff = () => {
    // do the fetch
}
console.log(fetchStuff)