const express = require ('express');
const router = express.Router();

// Importar o Controlador
const CompradorController = require ('../controllers/CompradorController');

// Rotas
// Rotas de Listagem dos Comprador
router.get('/list', CompradorController.GetAllComprador);
// Rotas de Criaçao dos Comprador
router.post('/create', CompradorController.createComprador);
// Rotas de Login dos Comprador
router.post('/login', CompradorController.loginComprador);
// Rotas de Update dos Comprador
router.patch('/udpdate/:id', CompradorController.updateComprador);
// Rotas de Delete dos Comprador
router.delete('/delete/:id', CompradorController.deleteComprador);
// Rotas para ir os ultimos 3 Comprador e fazer a sua confirmaçao
router.get('/GetLast3CompradorforConfirmation', CompradorController.GetLast3CompradorforConfirmation);
// Rotas para ir buscar os todos os Comprador para fazer a sua confirmaçao
router.get('/getAllCompradorforConfirmation', CompradorController.getAllCompradorforConfirmation);
// Rotas para Aceitar Comprador
router.get('/Aceitar', CompradorController.Aceitar);
// Rotas para Recusar Comprador
router.get('/Recusar', CompradorController.Recusar);

module.exports = router;