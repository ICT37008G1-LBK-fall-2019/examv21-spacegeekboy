import axios from 'axios';

// 1)

let date = new Date();

let day = date.getDay();

let month = date.getMonth();

let year = date.getFullYear();

let mustReject = new Promise((resolve,reject) => {

reject = `${day}.${month}.${year}`;

setTimeout(() => {

console.log(reject);

},2000);

});

// 2)

axios.get('https://jsonplaceholder.typicode.com/posts').then(item => {

let body = document.querySelector('body');

let ul = document.createElement('UL');

item.data.map(item => {

let li = document.createElement('LI');

li.innerHTML = item.title;

ul.appendChild(li);

})

body.appendChild(ul)

})