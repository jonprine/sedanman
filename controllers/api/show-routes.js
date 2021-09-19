const router = require('express').Router();
const { Show} = require('../../models');

// GET /api/shows
router.get('/', (req, res) => {
    Show.findAll()
      .then(dbShowData => res.json(dbShowData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// GET /api/shows/1
router.get('/:id', (req, res) => {
    Show.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbShowData => {
        if (!dbShowData) {
          res.status(404).json({ message: 'No show found with this id' });
          return;
        }
        res.json(dbShowData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// POST /api/shows
router.post('/', (req, res) => {
    
    Show.create({
      date: req.body.date,
      city: req.body.city,
      venue: req.body.venue,
      address: req.body.address,
      contact: req.body.contact,
      phone: req.body.phone,
      email: req.body.email,
      deal: req.body.deal,
      deposit: req.body.deposit,
      showtime: req.body.contact,
      arrivaltime: req.body.contact,

    })
      .then(dbShowData => res.json(dbShowData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// PUT /api/shows/1
router.put('/:id', (req, res) => {

    Show.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbShowData => {
        if (!dbShowData[0]) {
          res.status(404).json({ message: 'No show found with this id' });
          return;
        }
        res.json(dbShowData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// DELETE /api/shows/1
router.delete('/:id', (req, res) => {
    Show.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbShowData => {
        if (!dbShowData) {
          res.status(404).json({ message: 'No show found with this id' });
          return;
        }
        res.json(dbShowData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;