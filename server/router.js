const router = require('express').Router();
const controller = require('./controller');

router.get('/ds/compare', controller.compareText);

module.exports.router = router;