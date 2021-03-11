var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    name: {type: String, required: true, max: 300},
    year: {type: Number, required: true},
    director: {type: String, required: true, max: 500},
});


// Export the model
module.exports = mongoose.model('Movie', MovieSchema);