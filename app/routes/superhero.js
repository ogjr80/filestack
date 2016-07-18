//dependencies 
var mongoose = require('mongoose'); 
var Superhero = require('../models/superhero'); 

//app routes 
module.exports = function(){
	return {
		/* 
		 *Get route to retrieve all the superheroes.
		 */

		 getAll: function(req, res){
		 	//Query the DB and if no errors , send all super heroes
		 	var query = Superhero.find({});
		 	query.exec(function(err, superheroes){
		 		if(err){
		 			res.send(err);
		 		}
		 		res.json(superheroes); 
		 	}); 
		 }, 

		 post: function(req, res){
		 	var newSuperhero = new Superhero(req.body); 
		 	//save it into the db 
		 	newSuperhero.save(function(err){
		 		if(err) res.send(err); 
		 		//if no errors, send it back 
		 		res.json(req.body); 
		 	});
		 },


		 getOne: function(req, res){
		 	Superhero.findById(req.params.id,function(err, superhero){
		 		if(err) res.send(err); 
		 		//if no error send it back 
		 		res.json(superhero); 
		 	}); 
		 }
	}
}; 