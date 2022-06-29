const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

/* GET home page. */
router.get('/', auth, function(req, res, next) {
  res.render('index', { darkMode: req.session.darkMode, name: req.session.name });
});

router.post('/login', async (req, res) => {
  const { name, password } = req.body;

  if (name && password) {
    req.session.isLogged = true;
    req.session.name = name;
    return res.redirect('/');
  }else {
    res.render('login', { loginFails: true})
  }
})

router.get('/login', (req, res) => {
  res.render('login', { loginFail: false });
});

router.get('/dark-mode', (req, res) => {
  req.session.darkMode = !req.session.darkMode;
  res.cookie('darkMode', req.session.darkMode);
  res.redirect('/');
});

module.exports = router;
