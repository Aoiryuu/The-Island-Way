 var points = [
 	{id:1 ,
 		city: "Waipahu"},
 	{id:2,
 		city:"PearlBity" }
]
console.log(points)
var currentCity = null;
function showData(city){
	//document.getElementById(currentCity).style.display = "none"
	document.getElementById(city).style.display="block"
	currentCity = city;
}
function hideCity(currentCity){
	document.getElementById(currentCity).style.display = "none"
}