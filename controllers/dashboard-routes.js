const router = require('express').Router();
const sequelize = require('../config/connection');
const { Show, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
    Show.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
    })
      .then(dbShowData => {
        // serialize data before passing to template
        const shows = dbShowData.map(show => show.get({ plain: true }));
        res.render('dashboard', { shows, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // new show route
router.get("/new-show", (req, res) => {
    res.render("new-show");
  });

  router.get('/edit/:id', withAuth, (req, res) => {
    Show.findOne({
        where: {
            user_id: req.session.user_id
        },
    })
        .then(dbShowData => {
            // serialize data before passing to template
            const show = dbShowData.get({ plain: true });
            res.render('edit-show', { show, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})


module.exports = router;