const _ = require('underscore');

// #1

var customers = [{
  "id": 1,
  "first_name": "Gisele",
  "last_name": "Norquay",
  "email": "gnorquay0@mapy.cz",
  "bitcoin_address": "1CysX3bL3EqV4fEEzgrhhRyMwDNCoSduCD"
}, {
  "id": 2,
  "first_name": "Abram",
  "last_name": "Candelin",
  "email": "acandelin1@cafepress.com",
  "bitcoin_address": "1Fn6SApcGLTLJPxeSothGekqZDpsS9yz9W"
}, {
  "id": 3,
  "first_name": "Clarance",
  "last_name": "Erett",
  "email": "cerett2@multiply.com",
  "bitcoin_address": "1FRAfJeAswuZMqfYnUZeWr9GyLHK4jk74"
}, {
  "id": 4,
  "first_name": "Mireille",
  "last_name": "Mattiuzzi",
  "email": "mmattiuzzi3@npr.org",
  "bitcoin_address": "192BUVYj1nSpjtjcpc5bVEPfBF2hVs2Mq6"
}, {
  "id": 5,
  "first_name": "Brandais",
  "last_name": "Fosdick",
  "email": "bfosdick4@redcross.org",
  "bitcoin_address": "15LqYGZLvA9znt6GYePh6Pm47cFsczLTCV"
}, {
  "id": 6,
  "first_name": "Micheil",
  "last_name": "Igounet",
  "email": "migounet5@pcworld.com",
  "bitcoin_address": "1Kd9LBx59cGZXMQ1YsyppZaNX5umWjBxeP"
}, {
  "id": 7,
  "first_name": "Sheba",
  "last_name": "Bwye",
  "email": "sbwye6@slideshare.net",
  "bitcoin_address": "1HToZvUD2KMYJdiV94S7dNzDBfccbKwXsh"
}, {
  "id": 8,
  "first_name": "Melli",
  "last_name": "Chinge de Hals",
  "email": "mchingedehals7@delicious.com",
  "bitcoin_address": "1QFDGuHCnZtUUb3prTuWYK15inYmimYmwL"
}, {
  "id": 9,
  "first_name": "Edita",
  "last_name": "Houldin",
  "email": "ehouldin8@flavors.me",
  "bitcoin_address": "157v5xb9qjDQKp85V3ZMXdhudX8MNbm3TL"
}, {
  "id": 10,
  "first_name": "Inness",
  "last_name": "Durrad",
  "email": "idurrad9@indiatimes.com",
  "bitcoin_address": "1ErLV7m1ARgf9Y1mbWWqnEiFtZnDyrjzUP"
}]

// Create and array of all email addresses
// first without using underscore's pluck, then with it.

let emails = function (arr) {
  var emailAdd = []
  for (i = 0; i < arr.length; i++) {
    emailAdd.push(arr[i].email)
  }
  return emailAdd
}
console.log(emails(customers));

// _ way

let emails2 = _.pluck(customers, 'email')
console.log(emails2);

// #2

var inviteList1 = ['Ed', 'Fanny', 'Mildred', 'Alice', 'James'];
var inviteList2 = ['Jake', 'Mildred', 'Jimmy', 'Ed', 'Franklin']


// Uh oh! We are having a party and two invite lists were created. 
// Create one list of the people we want at the party (no duplicates).
// Then remove all duplicates using _.union().

let guestList = _.union( inviteList1, inviteList2)
console.log(guestList);


// #3


var friendsOfJim = ['Tom', 'Carina', 'Rex', 'Jane', 'Greg', 'Nancy', 'Alison', 'Goose'];
var friendsOfBetty = ['Burt', 'Dave', 'Tina', 'Biggie', 'Rex', 'Carina', 'Victoria', 'Tom', 'Nancy'];


// Jim and Betty are having a party, but they only want to invite mutual friends. Create and array of mutual friends. First without using underscore, then using underscores _.intersection().

let combined = ['Tom', 'Carina', 'Rex', 'Jane', 'Greg', 'Nancy', 'Alison', 'Goose', 'Burt', 'Dave', 'Tina', 'Biggie', 'Rex', 'Carina', 'Victoria', 'Tom', 'Nancy']

function invited(arr) {
  let newList = []
  arr.forEach( ( e, i ) => {
    if ( arr.indexOf( e, i + 1 ) > -1 ) {
      if ( newList.indexOf( e ) === -1 ) {
        newList.push( e )
      }
    }
  })
  return newList
}

console.log(invited(combined));

// with _

let invited2 = _.intersection( friendsOfBetty, friendsOfJim )
console.log(invited2);

var purchases = [{
  company: 'Dunder Mifflin', order: 1000
}, {
  company: 'Staples', order: 400
}, {
  company: 'Dunder Mifflin', order: 200
}, {
  company: 'Dunder Mifflin', order: 900
}, {
  company: 'Dunder Mifflin', order: 1800
}, {
  company: 'Staples', order: 1200
}, {
  company: 'Staples', order: 2400
}, {
  company: 'Dunder Mifflin', order: 5000
}]


// First, group the purchases by company without underscore
// then do it again using _.groupBy()

let grouper = _.groupBy( purchases, 'company' )

console.log(grouper);

