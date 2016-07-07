var router = require('express').Router(),
    service = require('../services/vendor');

router.get('/:user_id/:user_pass', service.getLoginVerified);

module.exports = router;