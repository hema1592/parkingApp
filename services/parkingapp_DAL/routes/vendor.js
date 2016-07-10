var router = require('express').Router(),
    service = require('../services/vendor');

router.post('/:userid/:ownername/:owneraddress/:ownerlocationid', service.addVendorDetails);

router.delete('/:vendorid/:uid/:upass', service.deleteVendorDetails);

router.put('/:vendorid/:userid/:ownername/:owneraddress/:ownerlocationid', service.updateVendorDetails);

router.get('/:vendorid', service.getVendorDetailsById

module.exports = router;