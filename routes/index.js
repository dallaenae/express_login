const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
  res.render('login');
});
router.post('/login', (req, res, next) => {
  console.log('/login : ', req.body);
  res.send('success');
});

module.exports = router;
