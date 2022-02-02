//toggle for menus
$(document).ready(function(){
	$(".sub-btn").click(function(){
		$(this).next(".sub-menu").slideToggle();
	});
});

//javascript for the responsive navigation menu
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
	menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
	menu.classList.remove("active");
});

//map options
let mapOptions = {
	center: [42.860, 3.472],
	zoom:6,
	zoomControl: false
}

//create map
var map = L.map('map',mapOptions)

let layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png');
layer.addTo(map);

//create layer para os Portos
var Pportos = $.getJSON("Portos.json");
Pportos.then(function(data){
	var Porto = L.geoJson(data, {
		filter: function(feature, layer){
				return feature.properties.NomePorto == "Porto"
		}
	});

	var Lisboa = L.geoJson(data, {
		filter: function(feature, layer){
				return feature.properties.NomePorto == "Lisboa"
		}
	});


//toggle for Layer Portos
$(".Menu-Porto").click(function(){
	map.addLayer(Porto)
	map.removeLayer(Lisboa)
});

$(".Menu-Lisboa").click(function(){
	map.addLayer(Lisboa)
	map.removeLayer(Porto)
});

});
varr carRoute = JSON.parse('[{"lat":51.129466960517135,"lng":2.6630860380828385},{"lat":51.07664802198799,"lng":2.738342452794314},{"lat":51.055941653758396,"lng":2.749328780919314},{"lat":51.00067931792692,"lng":2.7778932172805075},{"lat":50.943967078334666,"lng":2.826233077794314},{"lat":50.89794502437422,"lng":2.867431640625},{"lat":50.846655509682435,"lng":2.9003906250000004},{"lat":50.824458803489804,"lng":2.9619141295552254},{"lat":50.79669804718136,"lng":3.0190430022776127},{"lat":50.76475273687021,"lng":3.1025391630828385},{"lat":50.72444284265441,"lng":3.1772460602223873},{"lat":50.65207604172236,"lng":3.282714877277613},{"lat":50.60469890778924,"lng":3.357421942055226},{"lat":50.562855920362125,"lng":3.425537142902613},{"lat":50.5181824559931,"lng":3.495849743485451},{"lat":50.47905843134065,"lng":3.570556808263064},{"lat":50.47626260659788,"lng":3.629882913082838},{"lat":50.492339146862776,"lng":3.772155828773976},{"lat":50.514693454200405,"lng":3.903991766273976},{"lat":50.510502790942944,"lng":3.9633178710937504},{"lat":50.49792872905663,"lng":4.024841375648976},{"lat":50.48185790425272,"lng":4.073730502277614},{"lat":50.47347053735934,"lng":4.133056774735452},{"lat":50.4776644868276,"lng":4.20336937531829},{"lat":50.479062245100565,"lng":4.231933560222388}]');
//create layer para as viagens
var Viagens = $.getJSON("viagens.json");
Viagens.then(function(data2){
	var Ano_1450 = L.geoJson(data2, {
		filter: function(feature, layer){
			return feature.properties.Ano == 1450;
		}
	});


//toggle for Layer Anos
$(".1450-btn").click(function(){
	L.motion.polyline(carRoute,{
		color:"indigo"
	},
	{
		auto: true,
		duration: 3000,
		easing: L.Motion.Ease.easeInOutQuart
	},{
		removeOnEnd: true,
		showMarker: false
	}).addTo(map);
});

});





