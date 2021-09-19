const router = require("express").Router();
const sequelize = require("../config/connection");
const { Show } = require("../models");

router.get("/", (req, res) => {
  Show.findAll({})
    .then((dbShowData) => {
      const shows = dbShowData.map(show => show.get({ plain: true }));
      res.render('homepage', { shows });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
