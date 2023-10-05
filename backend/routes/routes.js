const express = require('express');

require('dotenv').config();

const router = express.Router();

const { getHamburguesas, postHamburguesas , deleteHamburguesas, putHamburguesas} = require('../controllers/hamburguessas.controllers.js');
const { getArepas, postArepas, deleteArepas, putArepas} = require('../controllers/arepas.controllers.js');
const { getBebidas, postBebidas, deleteBebidas, putBebidas} = require('../controllers/bebidas.controllers.js');
const { getPicadas, postPicadas, deletePicadas, putPicadas } = require('../controllers/picadas.controllers.js');
const { getPapas, postPapas, putPapas, deletePapas } = require('../controllers/papas_fritas.controllers.js');
const {  getCarnes,putCarnes,deleteCarnes,postCarnes } = require('../controllers/carnes.controllers.js');

const {  getCombos, putCombos, deleteCombos, postCombos } = require('../controllers/combos.controllers.js')
const { getRestaurantes, putRestaurantes, deleteRestaurantes, postRestaurantes } = require('../controllers/resturantes.controllers.js')


//! Hamburguesas
router.get('/getHam', getHamburguesas);
router.post('/postHam', postHamburguesas);
router.delete('/deleteHam/:id', deleteHamburguesas);
router.put('/putHam/:id', putHamburguesas);


//! Arepas
router.get('/getArep', getArepas);
router.post('/postArep', postArepas);
router.delete('/deleteArep/:id', deleteArepas);
router.put('/putArep/:id', putArepas);


//! Bebidas
router.get('/getBebi', getBebidas);
router.post('/postBebi', postBebidas);
router.delete('/deleteBebi/:id', deleteBebidas);
router.put('/putBebi/:id', putBebidas);


//! Carnes
router.get('/getCarne', getCarnes);
router.post('/postCarne', postCarnes);
router.delete('/deleteCarne/:id', deleteCarnes);
router.put('/putCarne/:id', putCarnes);


//! Picadas
router.get('/getPicadas', getPicadas);
router.post('/postPicadas',postPicadas);
router.delete('/deletePicadas/:id', deletePicadas);
router.put('/putPicadas/:id', putPicadas);


//! papas fritas
router.get('/getfritas', getPapas);
router.post('/postfritas',postPapas);
router.delete('/deletefritas/:id', deletePapas);
router.put('/putfritas/:id', putPapas);


//! Restaurantes
router.get('/getRestauran', getRestaurantes);
router.post('/postRestauran', postRestaurantes);
router.delete('/deleteRestauran/:id', deleteRestaurantes);
router.put('/putRestauran/:id', putRestaurantes);


//! Combos
router.get('/getCombo', getCombos );
router.post('/postCombo', postCombos);
router.delete('/deleteCombo/:id', deleteCombos);
router.put('/putCombo/:id', putCombos);


module.exports = router;