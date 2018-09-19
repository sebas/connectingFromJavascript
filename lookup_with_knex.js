"use strict";

const moment = require('moment');

const knexConfig = require('./knexfile');
const db = require('knex')(knexConfig['development']);

const searchData = process.argv.slice(2).join(" ");

function diplay(rows) {
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    console.log(`${i+1} ${row.first_name} ${row.last_name}, born ${moment(row.birthdate).format('YYYY-MM-DD')}`);
  }
}

db.select().from('famous_people').where('first_name', 'like', `%${searchData}%`).asCallback(function(err, rows) {
  if (err) return console.error(err);
  diplay(rows);
}).finally(() => { db.destroy(); });