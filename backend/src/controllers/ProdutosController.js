var ProdutoModel = require ('../models/ProdutosModel');
const sequelize = require("../config/database");

const controllers = {}
//sequelize.sync();


// Metodos do Controlador Produtos
// Comandos Simples
// Comando de buscar todos os Produtos
controllers.getAllProdutos = async (req, res, next) => {
    try {
      const data = await ProdutoModel.findAll();
      res.send({ success: true, data: data });
    } catch (error) {
      next(error);
    }
  };
  
  // Comando de buscar um produto por Nome
  controllers.getProdutoByName = async (req, res, next) => {
      try {
        const { nome } = req.params.nome
        // Verificar o nome
        if (!nome) {
          return res.status(400).json({ error: 'Nome do produto não fornecido.' });
        }
        const data = await ProdutoModel.findOne({ where: { nome } });
        // Verificar se existe o produto
        if (!produto) {
          return res.status(404).json({ error: 'Produto não encontrado.' });
        }
        res.send({ success: true, data: data });
      } catch (error) {
        next(error)
      }
    }
    
  // Comando de criar Produtos
  controllers.createProduto = async (req, res, next) => {
    const a = await sequelize.transaction();
    console.log(req.body);
    try {
      const Produto = await ProdutoModel.create(
        {
          nome: req.body.nome,
          quantidade: req.body.quantidade,
          valorunitario: req.body.valorunitario,
          inflacao: req.body.inflacao,
          valortotal: req.body.valortotal,
        },
        { transaction: a }
      );
      await a.commit();
      res.send({ success: true, data: Produto });
    } catch (e) {
      await a.rollback();
      next(e);
    }
  };
  
  // Comando para apagar as Produto
  controllers.deleteProduto = async (req, res, next) => {
    try {
      const { idsearch } = req.params;
      //check if id is not a number
      if (isNaN(idsearch)) return createError.BadRequest("Id is not a number");
      const del = await ProdutoModel.destroy({
        where: { id: idsearch },
      });
      res.send({ success: true, deleted: del, message: "Delete successful" });
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = controllers;

  