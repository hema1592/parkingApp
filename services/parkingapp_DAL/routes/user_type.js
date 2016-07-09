var router = require('express').Router(),
    service = require('../services/user_type');

router.get('/:newusertype', service.addUserType);

module.exports = router;