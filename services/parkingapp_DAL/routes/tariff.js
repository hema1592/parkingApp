var router = require('express').Router(),
    service = require('../services/tariff');

router.post('/:locationid/:vehicletypeid/:tariffamount', service.addTariffDetails);

router.delete('/:tariffid/:uid/:upass', service.deleteTariffDetails);

router.put('/:tariffid/:locationid/:vehicletypeid/:tariffamount', service.updateTariffDetails);

router.get('/:tariffid', service.getTariffDetailsById);

module.exports = router;