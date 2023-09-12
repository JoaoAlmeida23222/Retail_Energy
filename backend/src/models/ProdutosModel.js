var Sequelize = require("sequelize");
var sequelize = require("../config/database");

var Produtos = sequelize.define(
  "produtos",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: Sequelize.STRING,
    quantidade: Sequelize.INTEGER,
    valorunitario: Sequelize.FLOAT,
    inflacao: Sequelize.FLOAT,
    valortotal: Sequelize.FLOAT,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Produtos;