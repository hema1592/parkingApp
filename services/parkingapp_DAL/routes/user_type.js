var router = require('express').Router(),
    service = require('../services/user_type');

router.post('/:newusertype', service.addUserType);

router.delete('/:usertypeid/:uid/:upass', service.deleteUserType);

router.put('/:usertypeid/:newusertype', service.updateUserType);

module.exports = router;