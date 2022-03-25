const express = require('express');
const router = express.Router();
const controller = require('../controller/LegendariesController');

router.get('/pineco', controller.getOneLegendary);
router.get('/all', controller.getAllLegendaries);

module.exports = router;