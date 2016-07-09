var router = require('express').Router(),
    service = require('../services/vendor');

router.get('/:userid/:ownername/:owneraddress/:ownerlocationid', service.addVendorDetails);

module.exports = router;