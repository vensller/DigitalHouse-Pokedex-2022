const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

/* GET home page. */
router.get('/', auth, function(req, res, next) {
  res.render('index', { darkMode: req.session.darkMode });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/dark-mode', (req, res) => {
  req.session.darkMode = !req.session.darkMode;
  res.cookie('darkMode', req.session.darkMode);
  res.redirect('/');
});

module.exports = router;
