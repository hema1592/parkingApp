var router = require('express').Router(),
    service = require('../services/users');

router.get('/all', service.getUserDetails);
router.get('/:id', service.getUserDetailsById);

module.exports = router;