const express = require('express');
const { getHomePage } = require('../controllers/homeController');
const router = express.Router();


router.get('/', getHomePage);

router.get('/helloworld', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router;