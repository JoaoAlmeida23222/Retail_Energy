const express = require ('express');
const router = express.Router();

// Importar o Controlador
const ProdutoController = require ('../controllers/ProdutosController');

// Rotas
// Rotas de Delete dos Produtos
router.delete('/delete/:id',ProdutoController.deleteProduto);
// Rotas de Listagem de um Produto por Nome
router.get('/list/:nome', ProdutoController.getProdutoByName);
// Rotas de Listagem dos Produtos
router.get('/list', ProdutoController.getAllProdutos);
// Rotas de Criaçao dos Produtos
router.post('/create', ProdutoController.createProduto);

module.exports = router;