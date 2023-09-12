var Sequelize = require("sequelize");
var sequelize = require("../config/database");

var Tipodeproposta = sequelize.define(
  "tipodeproposta",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: Sequelize.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = Tipodeproposta;
