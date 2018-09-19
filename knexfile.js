// Update with your config settings.

const settings = require("./settings"); // settings.json

module.exports = {

  development: {
    debug: true,
    asyncStackTraces: true,
    pool: { min: 0, max: 7 },
    client: 'pg',
    connection: {
      user     : settings.user,
      password : settings.password,
      database : settings.database,
      host     : settings.hostname,
      port     : settings.port,
      ssl      : settings.ssl
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  },

  staging: {
    client: 'pg',
    connection: {
      user     : settings.user,
      password : settings.password,
      database : settings.database,
      host     : settings.hostname,
      port     : settings.port,
      ssl      : settings.ssl
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  },

  production: {
    client: 'pg',
    connection: {
      user     : settings.user,
      password : settings.password,
      database : settings.database,
      host     : settings.hostname,
      port     : settings.port,
      ssl      : settings.ssl
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  }
};
