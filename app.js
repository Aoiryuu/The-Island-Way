//function autoCorrect(bar) {
//    var text = document.getElementById("bar");

//    var correcta1 = /hi/gi;
//    text.value = text.value.replace(correcta1, "Waipahu")

//    var correcta2 = /hy/gi;
//    text.value = text.value.replace(correcta2, "Pearl City")
//}



function oneCap(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
	}  
function searching() {
    console.log('oof');
    var input = document.getElementById("bar").value;
    console.log(oneCap(input));
    var cap = oneCap(input);


	


    if (cap === 'Waipahu') {
    showData('a1');
    }
    else if (input === 'Pearl City')
    showData('a2');
	else if (input === 'Waimalu')
    showData('a3');
	else if (input === 'Whitmore')
    showData('a4');
	else if (input === 'Ahuimanu')
    showData('a5');
	else if (input === 'Waikane')
    showData('a6');
	else if (input === 'Heeia')
    showData('a7');
	else if (input === 'Waimanalo')
    showData('a8');
	else if (input === 'Waialua')
    showData('a9');
	else if (input === 'Wahiawa')
    showData('a10');
	else if (input === 'Maunawili')
    showData('a11');
	else if (input === 'Aiea')
    showData('a12');
	else if (input === 'Haleiwa')
    showData('a13');
	else if (input === 'Nanakulii')
    showData('a14');
	else if (input === 'Makaha')
    showData('a15');
	else if (input === 'Waianae')
    showData('a16');
	else if (input === 'Ewa')
    showData('a17');
	else if (input === 'Mililani Mauka')
    showData('a18');
	else if (input === 'Kapolei')
    showData('a19');
	else if (input === 'Kahuku')
    showData('a20');
	else if (input === 'Laie')
    showData('a21');
	else if (input === 'Kailua')
    showData('a23');
	else if (input === 'Hauula')
    showData('a24');
	else if (input === 'Honolulu')
    showData('a25');
	else if (input === 'Kaneohe')
    showData('a26');
	else if (input === 'Kaawa')
    showData('a27');
	else if (input === 'Punaluu')
    showData('a28');
	else if (input === 'Pupukea')
    showData('a29');
	else if (input === 'Kahaluu')
    showData('a30');
	else if (input === 'Mokuleia')
    showData('a22');
	else if (input === 'Mililani Town')
    showData('a31');
	
	
	

}



var points = [




	{id:a1 ,

		city: "Waipahu"},

	{id:a2,

		city:"Pearl Bity" },

	{id:a3,

		city:"Waimalu" },

	{id:a4,

		city:"Whitmore Village" },

	{id:a5,

		city:"Ahuimanu" },

	{id:a6,

		city:"Waikane" },

	{id:a7,

		city:"Heeia" },

	{id:a8,

		city:"Waimanalo" },

	{id:a9,

		city:"Waialua" },

	{id:a10,

		city:"Wahiawa" },

	{id:a11,

		city:"Maunawili" },

	{id:a12,

		city:"Aiea" },

	{id:a13,

		city:"Haleiwa" },

	{id:a14,

		city:"Nanakulii" },

	{id:a15,

		city:"Makaha" },

	{id:a16,

		city:"Waianae" },

	{id:a17,

		city:"Ewa" },

	{id:a18,

		city:"Mililani Mauka" },

	{id:a19,

		city:"Kapolei" },

	{id:a20,

		city:"Kahuku" },

	{id:a21,

		city:"Laie" },

	{id:a22,

		city:"Mokuleia" },

	{id:a23,

		city:"Kailua" },

	{id:a24,

		city:"Hauula" },

	{id:a25,

		city:"Honolulu" },

	{id:a26,

		city:"Kaneohe" },

	{id:a27,

		city:"Kaawa" },

	{id:a28,

		city:"Punaluu" },

	{id:a29,

		city:"Pupukea" },

	{id:a30,

		city:"Kahaluu" },

	{id:a31,

		city:"Mililani Town" },

	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	


]

var currentCity = null;
var currentImage = null;
function showData(city){
	currentCity = city;
	document.getElementById("overlay").style.display="block";
	document.getElementById("overlay").append(document.getElementById(city));
	document.getElementById(city).style.display = "block";
	document.getElementById(city).style.borderStyle ="none";
	
}

function hideCity(currentCity){
	document.getElementById(currentCity).style.display = "none"
	document.getElementById("whole").append(document.getElementById(currentCity));

	document.getElementById("overlay").innerHTML= "";
	document.getElementById("overlay").style.display="none";

}

function showPic(image) {
	currentImage = image;
	document.getElementById("column").style.display="block";
	document.getElementById("column").append(document.getElementById(image));
	document.getElementById(image).style.display = "block";
	document.getElementById(image).style.borderStyle = "none"

}

function hidePic(currentImage) {
	document.getElementById(currentImage).style.display = "none"
	document.getElementById("whole").append(document.getElementById(currentImage));
	//document.getElementById("column").innerHTML = "";
	//document.getElementById("column").style.display = "none";
}

var time = document.getElementById('time');
function clock() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  time.textContent = h + ":" + m + ":" + s;
}
setInterval(clock, 1000);



var modal = document.getElementById('myModal');
var img = document.getElementById('a1p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a1p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a2p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a2p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a3p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a3p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a4p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a4p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a5p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a5p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a6p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a6p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a7p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a7p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a8p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a8p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a9p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a9p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a10p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a10p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a11p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a11p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a12p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a12p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}

var modal = document.getElementById('myModal');
var img = document.getElementById('a13p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a13p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a14p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a14p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a15p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}



var modal = document.getElementById('myModal');
var img = document.getElementById('a15p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a16p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a16p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a17p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a17p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a18p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a18p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a19p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a19p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a20p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a20p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a21p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a21p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a22p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a22p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a23p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a23p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a24p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a24p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a25p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a25p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a26p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a26p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a27p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a27p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a28p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a28p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a29p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a29p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a30p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a30p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a31p1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = document.getElementById('a31p2');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}





