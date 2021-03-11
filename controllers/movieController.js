var Movie = require('../models/movieModel');

// Insert single data for movie
exports.movie_create = function (req, res, next) {
    Movie.findOne({name: req.body.name}).exec((err, resObj) => {
        if (err) {
            res.send({status: 500, mesg: 'Error occured.'});
        } else if (resObj) {
            res.send({status: 200, mesg: 'Please use different movie name, duplicate name not allowed.'});
        } else {
            var movie = new Movie({
                name: req.body.name,
                year: req.body.year,
                director: req.body.director
            });
            movie.save((err, docs) => {
                if (err) {
                    res.send({status: 500, mesg: 'Error occured while saving data.'});
                }
                res.send({status: 200, mesg: 'Movie Created successfully.', data: docs});
            });
        }; 
    });
};

// Insert multiple movie data
exports.movies_inserts = function (req, res, next) {
       Movie.insertMany(req.body, (err, docs) => {
        if (err) { 
            res.send({status: 500, mesg: 'Error occured while saving data.'});
        } else {
            res.send({status: 200, mesg: 'Movies are inserted successfully.', data: docs});
        }
    });
};

// Return movie data based on query param
exports.movie_details = function (req, res) {
    Movie.find({ $or:[{name: req.query.query}, {director: req.query.query}]}).then(movie => {
        res.send({status: 200, data: movie});
    }).catch(error => {
        res.send({status: 500, mesg: 'Error occured while fetching the movie data.'});
    });
}

