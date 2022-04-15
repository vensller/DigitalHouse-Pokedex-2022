const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

/* GET home page. */
router.get('/', auth, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {
  res.render('login');
})

module.exports = router;
