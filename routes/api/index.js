const router = require('express').Router();

const showRoutes = require('./show-routes.js');

router.use('/shows', showRoutes);

module.exports = router;
