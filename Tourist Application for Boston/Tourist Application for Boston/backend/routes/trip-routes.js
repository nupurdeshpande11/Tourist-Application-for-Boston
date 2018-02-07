var express = require('express');
var router = express.Router();
var Trip = require('../models/trip-model');
router.get('/', function(req, res){
     Trip.getTrips(function(err,trips){
         if(err) throw err;
         res.json(trips);
     });
 })
router.post('/', function(req, res){
    var newTrip = {
        name: req.body.name,
        location : req.body.location,
        details : req.body.details,
        budget: req.body.budget
    }
     Trip.addTrip(newTrip,function(err,trip){
         if(err) throw err;
         res.json(trip);
     });
 })
 router.put('/:_id', function(req, res){
     var update = {
        name: req.body.name,
        location : req.body.location,
        details : req.body.details,
        budget: req.body.budget
    }
     Trip.updateTrip(req.params._id , update, function(err,trip){
         if(err) throw err;
         res.json(trip);
     });
 })
 router.delete('/:_id', function(req, res){
     
     Trip.deleteTrip(req.params._id ,  function(err,trip){
         if(err) throw err;
         res.json(trip);
     });
 })
 router.get('/:_id', function(req, res){
    
     Trip.getTrip(req.params._id , function(err,trip){
         if(err) throw err;
         res.json(trip);
     });
 })
module.exports = router;