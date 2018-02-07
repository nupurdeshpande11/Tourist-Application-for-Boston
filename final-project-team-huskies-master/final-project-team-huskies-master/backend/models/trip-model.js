var mongoose = require('mongoose');
var triSchema = new mongoose.Schema({
    name: String,
    location : String,
    details : String,
    budget : String
})

var Trip = module.exports = mongoose.model('Trip', triSchema);

module.exports.getTrips = function(callback){
    Trip.find(callback);
}
module.exports.addTrip = function(newTrip, callback){
    Trip.create(newTrip, callback);
}
module.exports.updateTrip = function(id, newTrip, callback){
    Trip.findByIdAndUpdate(id, newTrip, callback);
}
module.exports.deleteTrip = function(id, callback){
    Trip.findByIdAndRemove(id, callback);
}
module.exports.getTrip = function(id, callback){
    Trip.findById(id, callback);
}
