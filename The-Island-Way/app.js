var points = [




	{id:a1 ,

		city: "Waipahu"},

	{id:a2,

		city:"Pearl City" },

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
function showData(city){
	currentCity = city;
	document.getElementById("overlay").style.display="block";
	document.getElementById("overlay").append(document.getElementById(city));
	document.getElementById(city).style.display = "block";
}
function hideCity(currentCity){
	document.getElementById(currentCity).style.display = "none"
	document.getElementById("whole").append(document.getElementById(currentCity));

	document.getElementById("overlay").innerHTML= "";
	document.getElementById("overlay").style.display="none";

}
