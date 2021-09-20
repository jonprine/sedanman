const router = require("express").Router();
const sequelize = require("../config/connection");
const { Show, User } = require("../models");

router.get("/", (req, res) => {
  console.log(req.session);
  Show.findAll({
    attributes: [
      "date",
      "city",
      "venue",
      "address",
      "contact",
      "phone",
      "email",
      "deal",
      "deposit",
      "showtime",
      "arrivaltime",
    ],
  })
    .then((dbShowData) => {
      const shows = dbShowData.map((show) => show.get({ plain: true }));
      res.render("homepage", { shows, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// login
router.get("/login", (req, res) => {
  res.render("login");
});

// single show
router.get("/show/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No show found with this id" });
        return;
      }
      // serialize the data
      const show = dbShowData.get({ plain: true });

      res.render("single-show", { show });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// new show route
router.get("/new-show", (req, res) => {
  res.render("new-show");
});

module.exports = router;
