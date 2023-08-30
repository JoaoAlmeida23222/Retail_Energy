var Sequelize = require("sequelize");

const sequelize = new Sequelize("PI3", "postgres", "123456789", {
  host: "localhost",
  port: "3000",
  dialect: "postgres",
});

//const sequelize = new Sequelize(process.env.DATABASECONNECTIONSTRING, { dialect: "postgres" });
//sequelize.authenticate();

module.exports = sequelize;