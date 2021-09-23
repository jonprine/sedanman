const router = require("express").Router();
const sequelize = require("../config/connection");
const { Show, User } = require("../models");

router.get("/", (req, res) => {
  console.log(req.session);
  Show.findAll({
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

// signup
// login
router.get("/signup", (req, res) => {
  res.render("signup");
});



// single show
router.get("/show/:id", (req, res) => {
  Show.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbShowData) => {
      if (!dbShowData) {
        res.status(404).json({ message: "No show found with this id" });
        return;
      }
      // serialize the data
      const show = dbShowData.get({ plain: true });

      res.render("single-show", { 
        show,
      loggedIn: req.session.loggedIn
     });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
