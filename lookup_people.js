"use strict";

const db = require("./db");
const moment = require('moment');

console.log("Searching ....");

const searchData = process.argv.slice(2).join(" ");


function runQuery(query, values = []) {
  console.log("Query... ", query);
  console.log("Values... ", values);
  db.query(query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result);
    // db.end();
  });
}

db.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  // runQuery("SELECT first_name AS name, last_name AS last FROM famous_people;", [], (err, result) => {
  //   if (err) {
  //     return console.error("error running query", err);
  //   }
  // });

  // runQuery("SELECT first_name AS name, last_name AS last FROM famous_people WHERE first_name LIKE $1 OR last_name like $1;", [`%${searchData}%`], (err, result) => {
  //   if (err) {
  //     return console.error("error running query", err);
  //   }
  // });

  db.query("SELECT first_name AS name, last_name AS last, birthdate FROM famous_people WHERE first_name LIKE $1 OR last_name like $1;", [`%${searchData}%`], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(`Found ${result.rowCount} person(s) by the name ${searchData}:`);
    for (let i = 0; i < result.rows.length; i++) {
      const res = result.rows[i];
      console.log(`${i+1} ${res.name} ${res.last}, born ${moment(res.birthdate).format('YYYY-MM-DD')}`);
    }
    db.end();
  });
});