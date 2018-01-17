const express = require('express');
const router = express.Router();
 
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/about', (req, res) => {
  res.send('About Us route Triggered');
});

router.get('/contact', (req, res) => {
  res.send('Contact Us route Triggered');
});

module.exports = router;