var router = require('express').Router(),
    service = require('../services/seasonal_booking');

router.get('/:user_id/:user_pass', service.getLoginVerified);

module.exports = router;