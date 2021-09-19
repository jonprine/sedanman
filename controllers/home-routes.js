

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage',   {
        "id": 2,
        "date": "Sept 18",
        "city": "Atlanta, GA",
        "venue": "The Eastern",
        "address": "434 Clifton Dr",
        "contact": "Scott Orvold",
        "phone": "223-4433",
        "email": "scott@zeromile.com",
        "deal": "$50000",
        "deposit": "$125,000",
        "showtime": "8:00pm",
        "arrivaltime": "5:00pm"
      });
  });

module.exports = router;