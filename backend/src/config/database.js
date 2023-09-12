var Sequelize = require("sequelize");

const sequelize = new Sequelize("PI3", "postgres", "123456789", {
  host: "database",
  port: "5432",
  dialect: "postgres",
});

/*
const sequelize = new Sequelize(process.env.DATABASECONNECTIONSTRING, { dialect: "postgres" });
sequelize.authenticate();
*/

module.exports = sequelize;