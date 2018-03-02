const path = require('path');

module.export = function(app){
	app.get('/home', (req, res) =>{
		res.sendFile(path.join(__dirname + '/../view/home.html'));
	});

	app.get ('/survey', (req, res) => {
		res.sendFile(path.join(__dirname + '/../view/survey.html'));
	})
}