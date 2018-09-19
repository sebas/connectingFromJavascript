"use strict";

const moment = require('moment');

const knexConfig = require('./knexfile');
const db = require('knex')(knexConfig['development']);

console.log("Inserting ....");

const [ firstName, lastName, birthDate ] = process.argv.slice(2);

// const famous = [
//   { first_name: 'Hugo', last_name: 'Sanchez', birthdate: '1958-07-11T00:00:00.000Z' }
//   { first_name: 'Johann Sebastian', last_name: 'Bach', birthdate: '1865-03-31T00:00:00.000Z' } // March 31, 1685
// ]

const famous = [
  { first_name: firstName, last_name: lastName, birthdate: moment(birthDate).format() }
]

db('famous_people')
  .insert(famous)
  .then(() => console.log("data inserted"))
  .catch((err) => { console.log(err); throw err })
  .finally(() => { db.destroy(); });