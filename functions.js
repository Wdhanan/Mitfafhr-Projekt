window.onload = function() {
    myMap = L.map('mapid').setView([49.250723, 7.377122], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18, // max. possible 23
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
    }).addTo(myMap);
}
function myfunction(){
	var el= document.getElementById("registration");
	document.querySelector("#registration").style.display = "block";
	var button=document.getElementById("hi");
	button.onclick=ausblende;
		
	
	}
	function ausblende(){
		document.querySelector("#registration").style.display = "none";
		}
    
