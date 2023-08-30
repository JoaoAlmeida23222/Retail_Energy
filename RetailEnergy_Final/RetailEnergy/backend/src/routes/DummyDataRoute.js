const express = require ('express');
const router = express.Router();

// Importar o Controlador
const DummyDataController = require ('../controllers/DummyDataController');

// Rota de Test
router.get('/testdata', DummyDataController.testdata);

module.exports = router;
