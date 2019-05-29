var path = require('path');

// pull in the friends variable data file
var cats = require('../data/cats.js');

module.exports = function(app) {

	// if user goes to /api/friends, send them the variable data as json
	app.get("/api/cats", function(req, res) {
		res.json(cats);
	});

	// handle the post request from the survey form
	app.post("/api/cats", function(req, res) {
		
		
    var userInput = req.body;
    var userResponses = userInput.scores;

    var matchName = "";
    var matchImage = "";
    var totalDifference = 500;
    
		// convert the values in surveyResults to integers
		for (var i=0; i<cats.length; i++) {
      
      var diff = 0;

      for (var a = 0; a < userResponses.length; a++){
        diff += Math.abs(cats[i].scores[a] - userResponses[a]);
		}
      
    if(diff < totalDifference) {
      
      totalDifference = diff;
      matchName = cats[i].name;
      matchImage = cats[i].photo;
    }
  }

    cats.push(userInput);
    
    res.json({status: "OK", matchName, matchImage: matchImage});
});
}