//JSON object with array of all books. 
var text = '[' +
'{ "Name":"David Ben-Gurion" , "Grade":"92" , "Id": "1" , "Year":"2016"},' +
'{ "Name":"Moshe Sharett" , "Grade":"81" , "Id": "2" , "Year":"2015"},' +
'{ "Name":"Levi Eshkol" , "Grade":"73 King" , "Id": "3" , "Year":"2016"},' +
'{ "Name":"Yigal Allon" , "Grade":"54" , "Id": "4" , "Year":"2015"},' +
'{ "Name":"Golda Meir" , "Grade":"68" , "Id": "5" , "Year":"2016"},' +
'{ "Name":"Yitzhak Rabin" , "Grade":"95" , "Id": "6" , "Year":"2016"} ]';

var obj = JSON.parse(text); //parser - json to object

//1. returning all students grades

exports.getAllStudentsGrades = function () {
	console.log("WS: Get all Students Grades");
	return obj;
};

//2. returning a student by his id

exports.getStudGradeByID = function (id) {
	console.log("WS: Get Student Grade by ID")
	var result = [];
	for (i in obj){
		if(obj[i].Id == id){
			result.push(obj[i]);
		}
	}
	return result;
};

//3. returning all students by the year

exports.getStudGradeByYear = function (year) {
	console.log("WS: Get Student by Year")
	var result = [];
	for (i in obj){
		if(obj[i].Year == year){
			result.push(obj[i]);
		}
	}
	return result;
}