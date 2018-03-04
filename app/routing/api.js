var friends = require('../data/friends');

module.exports = function(app){
app.get('/api/friends', function(req, res){
	res.json(friends)

});

app.post('/api/friends', function(req,res){
	console.log('Test')
	var bestMatch = {
		name: '',
		photo: '',
		friendDifference: 1000
	};	

	var userData = req.body
	//console.log(userData + 'Userdata');
	var userName = userData.name
	var userPhoto = userData.photo;
	var userScores = userData.scores;

	var totalDifference = 0;

	
		for  (var i=0; i< friends.length; i++) {

		
			totalDifference = 0;

			
			for (var j=0; j< friends[i].scores[j]; j++){
				//console.log(scores[i] + ' Scores ');

				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

				if (totalDifference <= bestMatch.friendDifference){

					bestMatch.name = friends[i].name;
					console.log(bestMatch.name + ' Name');
					bestMatch.photo = friends[i].photo;
					bestMatch.friendDifference = totalDifference;
				}
			}
		}

		friends.push(userData);
		//console.log(friends);

		
		res.json(bestMatch);
		//console.log(bestMatch)



})

	
}