var Sequelize = require("sequelize");
var sequelize = require("../config/database");

var Comprador = sequelize.define(
  "comprador",
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
    endereco: Sequelize.STRING,
    detalhesendereco: Sequelize.STRING,
    codigopostal: Sequelize.STRING,
    informacao: Sequelize.STRING,
    cidade: Sequelize.STRING,
    confirmacao: Sequelize.BOOLEAN,
    cartao_nome: Sequelize.STRING,
    cartao_numero: Sequelize.INTEGER,
    cartao_data: Sequelize.STRING,
    cartao_CVV: Sequelize.INTEGER,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Comprador;
