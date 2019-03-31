const router = require('express').Router();

const pool = require('../database');

router.get('/add', (req, res) => {

    res.send('Form');

})

module.exports = router;
