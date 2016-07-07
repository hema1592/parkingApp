var router = require('express').Router(),
    service = require('../services/tariff');

router.get('/:user_id/:user_pass', service.getLoginVerified);

module.exports = router;