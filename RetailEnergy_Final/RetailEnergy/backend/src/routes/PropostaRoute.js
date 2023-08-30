const express = require ('express');
const router = express.Router();

// Importar o Controlador
const PropostaController = require ('../controllers/PropostaController');

// Rotas
// Rotas de Listagem dos Propostas
router.get('/list', PropostaController.GetAllPropostas);
// Rotas de Criaçao dos Propostas
router.post('/create', PropostaController.createProposta);
// Rotas de Update das Propostas
router.patch('/update/:id', PropostaController.updatePropostas);
// Rotas de Delete dos Propostas
router.delete('/delete/:id', PropostaController.deleteProposta);
// Rotas para ir buscar as 3 ultimas Propostas
router.get('/last3list', PropostaController.GetLast3Propostas);
// Rotas para fazer a venda 
router.get('/sell/:id', PropostaController.sellPropostas)
// Rotas para fazer contagem e medias
// Contagem Propopostas
router.get('/countPropostas', PropostaController.countPropostasCriadas)
// Contagem Propostas Vendidas
router.get('/countPropostasVendidas', PropostaController.countPropostasVendidas)
// Media
router.get('/MediaPropostas', PropostaController.MediaPropostasVendidas)

module.exports = router;