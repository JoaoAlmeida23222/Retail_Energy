const express = require('express');
const router = express.Router();

//Importar os controladores 
const TiposdePropostaController = require('../controllers/TipodepropostaController');

// Rotas
// Rotas de Listagem dos Tipos de Propostas por Id
router.get('/list/:id', TiposdePropostaController.getTipoPropostabyID);
// Rotas de Listagem dos Tipos de Propostas
router.get('/list', TiposdePropostaController.getAllTipoProposta);
// Rotas de Criaçao dos Tipos de Propostas
router.post('/create', TiposdePropostaController.createTipoProposta);
// Rotas de Update dos Tipos de Propostas
router.patch('/udpdate/:id',TiposdePropostaController.updateTipoProposta);
// Rotas de Delete dos Tipos de Propostas
router.delete('/delete/:id',TiposdePropostaController.deleteTipoProposta);

module.exports = router;