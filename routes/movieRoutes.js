var express = require('express');
var router = express.Router();

// Require the controllers
var movieController = require('../controllers/movieController');


router.post('/movie', movieController.movie_create);

router.post('/movies', movieController.movies_inserts);

router.get('/movies', movieController.movie_details);


module.exports = router;