const router = require('express').Router();

router.use(require('./Tasks/tasks.router'));
router.use(require('./Auth/auth.router'));

module.exports = router;