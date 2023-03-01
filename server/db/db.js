const Sequelize = require("sequelize");
const pkg = require("../../package.json");

const databaseName =
  pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

const config = {
  logging: false,
};

if (process.env.LOGGING === "true") {
  delete config.logging;
}

//https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}
//
const db = new Sequelize(
	process.env.DATABASE_URL || `postgres://grace_db_ulq1_user:qZv5AJSpF0WqK75RP0jZoQphoGuITjc7@dpg-cfv5p7l3t39doaohcdlg-a/grace_db_ulq1?ssl:true`,
	config
);
module.exports = db;
