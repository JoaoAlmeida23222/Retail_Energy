const express = require ('express');
const router = express.Router();

// Importar o Controlador
const ResponsavelController = require ('../controllers/ResponsaveisController');

// Rotas
// Rotas de Listagem dos Responsaveis
router.get('/list', ResponsavelController.GetAllResponsaveis);
// Rotas de Criaçao dos Responsaveis
router.post('/create', ResponsavelController.createResponsavel);
// Rotas de Login dos Responsaveis
router.post('/login', ResponsavelController.loginResponsavel);
// Rotas de Update dos Responsaveis
router.patch('/udpdate/:id', ResponsavelController.updateResponsaveis);
// Rotas de Delete dos Responsaveis
router.delete('/delete/:id', ResponsavelController.deleteResponsavel);
// Rotas para ir os ultimos 3 responsaveis e fazer a sua confirmaçao
router.get('/GetLast3ResponsaveisforConfirmation', ResponsavelController.GetLast3ResponsaveisforConfirmation);
// Rotas para ir buscar os todos os responsaveis para fazer a sua confirmaçao
router.get('/getAllResponsaveisforConfirmation', ResponsavelController.getAllResponsaveisforConfirmation);
// Rotas para Aceitar Responsavel
router.get('/Aceitar',ResponsavelController.Aceitar);
// Rotas para Recusar Responsavel
router.get('/Recusar',ResponsavelController.Recusar);

module.exports = router;