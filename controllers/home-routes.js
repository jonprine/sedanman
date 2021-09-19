const router = require("express").Router();
const sequelize = require("../config/connection");
const { Show } = require("../models");

router.get("/", (req, res) => {
  Show.findAll({})
    .then((dbShowData) => {
      console.log(dbShowData[0]);
      res.render('homepage', dbShowData[0].get({ plain: true }));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
