var router = require('express').Router(),
    service = require('../services/workdays');

router.get('/:workdaysid', service.getWorkdaysById);

module.exports = router;