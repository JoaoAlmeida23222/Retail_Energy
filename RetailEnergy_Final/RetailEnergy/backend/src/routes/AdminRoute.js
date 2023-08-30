const express = require ('express');
const router = express.Router();

// Importar o Controlador
const AdminController = require ('../controllers/AdminController');

// Rotas
// Rotas de Listagem dos Admins
router.get('/list', AdminController.getAllAdmin);
// Rotas de Criaçao dos Admins
router.post('/create', AdminController.createAdmin);
// Rotas de Login dos Admins
router.post('/login', AdminController.loginAdmin);
// Rotas de Update dos Admins
router.patch('/update/:id',AdminController.updateAdmin);
// Rotas de Update dos Admins
router.delete('delete/:id',AdminController.deleteAdmin);

module.exports = router;