var path = require("path");
var cats = require("../data/cats.js");


module.exports = function(app) {
 
  app.get("/api/cats", function(req,res) {
    res.json(cats);
  });
     
    app.post("/api/cats", function(req,res){
      
      var surveyResults = req.body.scores;

      for (var i=0; i<surveyResults.length; i++){
          surveyResults[i] = parseInt(surveyResults[i]);
      }

     var bestDifference = 10000;
     var bestMatch = 0;

     for (var i=0; cats.length; i++){

      var tempDifference = difference(surveyResults, cats[i].scores);
     
      console.log("difference between", surveyResults, "and",cats[i].name,cat[i].scores, "=", tempDifference);
    
     if (tempDifference < bestDifference) {
      bestDifference = tempDifference;
      bestMatch = i;
    }

  }

    function difference(array1, array2) {
      var differenceAmount = 0;

      for (var i =0; i<array1.length; i++){
        differenceAmount += Math.abs(array1[i] - array2[i]);
      }
    return differenceAmount;
    }
    res.send(cats[bestMatch]);
    
  });
}