"use strict";

const { Client } = require("pg");
const settings = require("./settings"); // settings.json

const db = new Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

module.exports = db