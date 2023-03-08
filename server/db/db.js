const Sequelize = require("sequelize");
const pkg = require("../../package.json");

require("dotenv").config();

const databaseName =
  pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

const config = {
  logging: false,
};

if (process.env.LOGGING === "true") {
  delete config.logging;
}

//http://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

//RENDER
//INTERNAL
//`postgres://grace_db_ulq1_user:qZv5AJSpF0WqK75RP0jZoQphoGuITjc7@localhost/grace_db_ulq1?ssl=true`
//EXTERNAL
//`postgres://grace_db_ulq1_user:qZv5AJSpF0WqK75RP0jZoQphoGuITjc7@localhost.ohio-postgres.render.com/grace_db_ulq1?ssl=true`
//PSQL
//PGPASSWORD=qZv5AJSpF0WqK75RP0jZoQphoGuITjc7 psql -h localhost.ohio-postgres.render.com -U grace_db_ulq1_user grace_db_ulq1
//LOCAL
//"postgres://localhost:5432/backupGrace"

const db = new Sequelize(process.env.DATABASE_URL, config);
module.exports = db;
