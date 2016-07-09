var router = require('express').Router(),
    service = require('../services/tariff');

router.get('/:locationid/:vehicletypeid/:tariffamount', service.addTariffDetails);

module.exports = router;