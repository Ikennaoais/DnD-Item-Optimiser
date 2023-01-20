const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});
router.get('/users', (req, res) => {
    res.send('User data');
  // code to handle the request
});
router.post('/users', (req, res) => {
  // code to handle the request
});

module.exports = router;
