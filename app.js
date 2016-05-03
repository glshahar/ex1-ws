var express = require('express'),
	url = require('url'),
	StudentsGrades = require('./GradesWS'), //folder of index.js
	app = express();



//first route - call first get function from WS.
app.get('/AllStudentsGrades' , 

	function (req, res) {
	res.status(200).json(StudentsGrades.getAllStudentsGrades());
});


//second route - call second function from WS (by Id).
app.get('/StudById/:Id', 

	function (req, res) {
	res.status(200).json(StudentsGrades.getStudGradeByID(req.params.Id));
});


//thired route - call thired get from WS (by Year).
app.get('/StudByYear/:year', 

	function (req, res) {
	res.status(200).json(StudentsGrades.getStudGradeByYear(req.params.year));
});


app.listen(process.env.PORT || 3000);
console.log("listening to port 3000");
