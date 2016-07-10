var router = require('express').Router(),
    service = require('../services/payment_method');

router.post('/:method_desc/:method_redirect_url', service.addPaymentMethodDetails);

router.delete('/:method_id/:uid/:upass', service.deletePaymentMethodDetails);

router.put('/:paymentmethodid/:methodname/:methodurl', service.updatePaymentMethodDetails);

module.exports = router;