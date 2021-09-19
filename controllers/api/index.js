const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const showRoutes = require('./show-routes.js');

router.use('/users', userRoutes);
router.use('/shows', showRoutes);

module.exports = router;
