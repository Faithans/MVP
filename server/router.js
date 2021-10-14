const router = require('express').Router();
const controller = require('./controller');

router.get('/ds/compare', controller.compareText);
router.post('/ds/submit', controller.submit);
module.exports.router = router;