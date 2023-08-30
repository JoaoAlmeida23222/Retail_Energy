var Sequelize = require("sequelize");
var sequelize = require("../config/database");

var Admin = sequelize.define(
  "admin",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomeinicial: Sequelize.STRING,
    nomefinal: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Admin;
