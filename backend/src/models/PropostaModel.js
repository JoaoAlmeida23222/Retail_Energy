var Sequelize = require("sequelize");
var sequelize = require("../config/database");

// Importar os Modelos Necessários Ligados pelas Chaves Forasteiras
// Tipo de Proposta - chave tipodepropostaID
var TipodeProposta = require('./TipodepropostaModel');
// Admin - chave adminID
var Admin = require ('./AdminModel');
// Comprador - chave compradorID
var Comprador = require("./CompradorModel");
// Responsaveis - chave responsaveisID
var Responsaveis = require("./ResponsaveisModel");
// Produto - chave ProdutoID
var Produto = require("./ProdutosModel");

var Proposta = sequelize.define(
    'proposta',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        data: Sequelize.DATE,
        detalhes: Sequelize.STRING,
        documentossend: Sequelize.STRING,
        documentosreceived: Sequelize.STRING,
        vendido: Sequelize.BOOLEAN,

        // Referencia ao Modelo do Produto
        produtoId:{
            type: Sequelize.INTEGER,
            references: {
                model: Produto,
                key: 'id'
            }
        },
        // Referencia ao Modelo do Tipo De Proposta
        tipodepropostaId:{
            type: Sequelize.INTEGER,
            references: {
                model: TipodeProposta,
                key: 'id'
            }
        },
        // Referencia ao Modelo do Admin
        adminId:{
            type: Sequelize.INTEGER,
            references: {
                model: Admin,
                key: 'id'
            }
        },
        // Referencia ao Modelo do Comprador
        compradorId:{
            type: Sequelize.INTEGER,
            references: {
                model: Comprador,
                key: 'id'
            }
        },
        // Referencia ao Modelo do Responsaveis
        responsaveisId:{
            type: Sequelize.INTEGER,
            references: {
                model: Responsaveis,
                key: 'id'
            }
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    });

// Associações    
TipodeProposta.hasMany(Proposta,{sourceKey: 'id', foreignKey: 'tipodepropostaId' });
Proposta.belongsTo(TipodeProposta, {sourceKey: 'id', foreignKey: 'tipodepropostaId'});

Proposta.belongsTo(Produto,{sourceKey:'id', foreignKey:'produtoId'});
Produto.hasOne(Proposta,{sourceKey:'id', foreignKey:'produtoId'});

Proposta.belongsTo(Admin,{sourceKey:'id', foreignKey:'adminId'});
Admin.hasMany(Proposta,{sourceKey:'id', foreignKey:'adminId'});

Proposta.belongsTo(Comprador, {sourceKey:'id', foreignKey:'compradorId'});
Comprador.hasMany(Proposta,{sourceKey:'id', foreignKey:'compradorId'});

Proposta.belongsTo(Responsaveis, {sourceKey:'id', foreignKey:'responsaveisId'});
Responsaveis.hasMany(Proposta,{sourceKey:'id', foreignKey:'responsaveisId'});

module.exports = Proposta;