var granimInstance = new Granim({
	element: "#granim-canvas",
	name: "granim",
	opacity: [1, 1],
	states: {
		"default-state": {
			gradients: [
				["#251b2e", "#120028"],
				["#120028", "#06001e"],
			],
		},
	},
});

let map;

function initMap() {
	let div = document.getElementById("map");
	if (div) {
		map = new google.maps.Map(div, {
			center: { lat: 40.005985, lng: 8.528926 },
			zoom: 9,
			mapTypeControl: false,
			styles: [
				{
					elementType: "geometry",
					stylers: [
						{
							color: "#120028",
						},
					],
				},
				{
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#746855",
						},
					],
				},
				{
					elementType: "labels.text.stroke",
					stylers: [
						{
							color: "#242f3e",
						},
					],
				},
				{
					featureType: "administrative.country",
					elementType: "geometry",
					stylers: [
						{
							color: "#cb25f9",
						},
					],
				},
				{
					featureType: "administrative.country",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#eba7ff",
						},
						{
							saturation: 100,
						},
						{
							lightness: 35,
						},
					],
				},
				{
					featureType: "administrative.locality",
					elementType: "labels.icon",
					stylers: [
						{
							visibility: "off",
						},
					],
				},
				{
					featureType: "administrative.locality",
					elementType: "labels.text.fill",
					stylers: [
						{
							saturation: -100,
						},
						{
							lightness: 100,
						},
					],
				},
				{
					featureType: "administrative.neighborhood",
					elementType: "labels.text",
					stylers: [
						{
							color: "#ffffff",
						},
						{
							lightness: -40,
						},
						{
							visibility: "simplified",
						},
					],
				},
				{
					featureType: "administrative.neighborhood",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#ffffff",
						},
						{
							lightness: -30,
						},
					],
				},
				{
					featureType: "administrative.neighborhood",
					elementType: "labels.text.stroke",
					stylers: [
						{
							visibility: "simplified",
						},
					],
				},
				{
					featureType: "administrative.province",
					elementType: "labels",
					stylers: [
						{
							color: "#ffffff",
						},
						{
							saturation: -100,
						},
					],
				},
				{
					featureType: "administrative.province",
					elementType: "labels.text",
					stylers: [
						{
							color: "#cb25f9",
						},
						{
							saturation: -65,
						},
						{
							visibility: "simplified",
						},
						{
							weight: 2,
						},
					],
				},
				{
					featureType: "landscape.natural",
					elementType: "labels",
					stylers: [
						{
							visibility: "off",
						},
					],
				},
				{
					featureType: "poi",
					stylers: [
						{
							visibility: "off",
						},
					],
				},
				{
					featureType: "poi",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#d59563",
						},
					],
				},
				{
					featureType: "poi.park",
					elementType: "geometry",
					stylers: [
						{
							color: "#263c3f",
						},
					],
				},
				{
					featureType: "poi.park",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#6b9a76",
						},
						{
							visibility: "off",
						},
					],
				},
				{
					featureType: "road",
					elementType: "geometry",
					stylers: [
						{
							color: "#ffffff",
						},
						{
							saturation: -75,
						},
						{
							lightness: -55,
						},
						{
							visibility: "on",
						},
					],
				},
				{
					featureType: "road",
					elementType: "geometry.stroke",
					stylers: [
						{
							color: "#212a37",
						},
					],
				},
				{
					featureType: "road",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#9ca5b3",
						},
					],
				},
				{
					featureType: "road.arterial",
					elementType: "geometry.fill",
					stylers: [
						{
							color: "#ff7cfd",
						},
						{
							saturation: -60,
						},
						{
							lightness: -75,
						},
					],
				},
				{
					featureType: "road.arterial",
					elementType: "labels.icon",
					stylers: [
						{
							visibility: "off",
						},
					],
				},
				{
					featureType: "road.highway",
					elementType: "geometry",
					stylers: [
						{
							color: "#493859",
						},
					],
				},
				{
					featureType: "road.highway",
					elementType: "geometry.stroke",
					stylers: [
						{
							color: "#1f2835",
						},
					],
				},
				{
					featureType: "road.highway",
					elementType: "labels.icon",
					stylers: [
						{
							visibility: "off",
						},
					],
				},
				{
					featureType: "road.highway",
					elementType: "labels.text.fill",
					stylers: [
						{
							visibility: "off",
						},
					],
				},
				{
					featureType: "road.highway.controlled_access",
					elementType: "labels.icon",
					stylers: [
						{
							visibility: "off",
						},
					],
				},
				{
					featureType: "road.local",
					elementType: "geometry",
					stylers: [
						{
							color: "#ff7cfd",
						},
						{
							saturation: -75,
						},
						{
							lightness: -80,
						},
					],
				},
				{
					featureType: "transit",
					stylers: [
						{
							visibility: "off",
						},
					],
				},
				{
					featureType: "transit",
					elementType: "geometry",
					stylers: [
						{
							visibility: "off",
						},
					],
				},
				{
					featureType: "transit.station",
					stylers: [
						{
							visibility: "off",
						},
					],
				},
				{
					featureType: "water",
					stylers: [
						{
							color: "#e9c65d",
						},
						{
							saturation: 100,
						},
						{
							lightness: 100,
						},
						{
							visibility: "off",
						},
					],
				},
			],
		});
	}
}
