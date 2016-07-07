var router = require('express').Router(),
    service = require('../services/paymentMethod');

router.get('/:method_desc/:method_redirect_url', service.addPaymentMethodDetails);

module.exports = router;