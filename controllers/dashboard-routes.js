const router = require('express').Router();
const sequelize = require('../config/connection');
const { Show, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, (req, res) => {
    res.render('dashboard', { loggedIn: true });
  });

  // new show route
router.get("/new-show", (req, res) => {
    res.render("new-show");
  });

module.exports = router;