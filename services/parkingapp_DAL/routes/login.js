var router = require('express').Router(),
    service = require('../services/login');

router.get('/:user_id', service.login);

module.exports = router;