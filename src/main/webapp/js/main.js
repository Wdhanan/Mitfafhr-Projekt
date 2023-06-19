// hier werden die Marker hinzugefügt
var arr= [];


window.onload = function() {

	let token = sessionStorage.getItem('loginToken');

	if (token != null) {
		setVisibilityHeader(true);
		setVisibility("find-ride-container", false);
		hidenAsideElement();
	}
	else {
		setVisibility("find-ride-container", true);
		setVisibilityHeader(false);
		hidenStundenplanElement();
	}
	
    initMap();


};





let myMap,latitude,longitude;

latitude = 49.250723;
longitude = 7.377122;

function initMap() {
    myMap = L.map('map-container').setView([49.250723, 7.377122], 12);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>, <a href="https://www.flaticon.com/free-icons/address" title="address icons">Address icons created by DinosoftLabs - Flaticon</a>',
        maxZoom: 18, // max. possible 23
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
    }).addTo(myMap);

    
    userMarker(latitude,longitude);
}


//Icon zur Anderung der Marker Farbe
var redIcon = L.icon({
	iconUrl: "./icon/marker-icon-red.png",
	shadowUrl: "./icon/marker-shadow.png",
	iconSize: [25,41],
	iconAnchor: [12,41],
	popupAnchor: [1,-34],
	shadowSize: [41,41],
});

var blueIcon = L.icon({
	iconUrl: "./icon/marker-icon-blue.png",
	shadowUrl: "./icon/marker-shadow.png",
	iconSize: [25,41],
	iconAnchor: [12,41],
	popupAnchor: [1,-34],
	shadowSize: [41,41],
});




function userMarker(longitude,latitude){
	let marker = L.marker([latitude, longitude]).addTo(myMap);
	marker.on('click',event=>changeColor(event));


}

function changeColor(event){
	
}

function firstUser(longitude,latitude){

	var meinIcon = L.icon({
		iconUrl:'/imgs/home-location.png',
		iconSize:[50,55]
	});

	L.marker([latitude, longitude],{icon:meinIcon}).addTo(myMap);


}
//Show form-aside
function getAsideElement(){
	const a = document.querySelector("#asideElement");
	a.classList.remove("hidden");
}
    
   //Set Visibility von den Elementen im Header 
    function setVisibilityHeader(visible) {
    const a = document.querySelector("#hiddenBeforLogin2");
    const b = document.querySelector("#hiddenBeforLogin1");
    
    // Selektion der Login and Register Button
    const c = document.querySelector("#hiddenAfterLogin1");
    const d = document.querySelector("#hiddenAfterLogin2");
    
    
    // visibility status der Elementen
    if(visible === true) {
        b.classList.remove("hidden");
        a.classList.remove("hidden");
        
        //Login and Register Button Element ausblenden
        c.classList.add("hidden");
        d.classList.add("hidden");
    } else {
        b.classList.add("hidden")
        a.classList.add("hidden")
        
        //Login and Register Button Element anzeigen
        c.classList.remove("hidden");
        d.classList.remove("hidden");
    }
}


// element anzeigen bzw ausblenden je nach Loginstatus
function setVisibility(Id, vis) {
	const a = document.querySelector("#stundenPlan");
    const b = document.getElementById(Id);
    
    if(vis === true) {
        b.classList.remove("hidden");
    } else {
        b.classList.add("hidden")
		a.classList.add("hidden");
		showMap();
    }
}

// get Element with function event
function getStundenTable(){
	
	document.querySelector("#asideElement").style.display="none";
	
	
	let token = sessionStorage.getItem('loginToken');
	const a = document.querySelector("#stundenPlan");
	const b = document.querySelector("#map-container");
	
	//falls der Token null ist kann man nicht suchen
	if(token != null){
		a.classList.remove("hidden");
		b.classList.add("hidden");
	}
	
}

// Hidden Form neuer User register
function abbrechen(){
	document.querySelector("#neuUserRegister").style.display = "none";
}


//Visibility von Studenplan Elemet

function setVisibilityStundenPlanElement(visible){

	const a = document.querySelector("#stundenplan");
	const b = document.querySelector("#map-container");
	const c = document.querySelector("#asideElement");
	
	if(visible === false){
		a.classList.remove("hidden");
		b.classList.remove("hidden");
		c.classList.remove("hidden");
	}else{
		a.classList.add("hidden");
		b.classList.add("hidden");
		c.classList.add("hidden");
	}
}
//Hidden StundTable
function hidenStundenplanElement(){
	const element1 = document.querySelector("#stundenPlan");
	element1.classList.add("hidden");
}

//Get Mitfahr
function getMitfahr(){
	
	document.querySelector("#asideElement").style.display="block";
	let token = sessionStorage.getItem('loginToken');
	const a = document.querySelector("#find-ride-container");
	const b = document.querySelector("#stundenPlan");
	const c = document.querySelector("#map-container");
	
	if(token != null){
		a.classList.remove("hidden");
		
		b.classList.add("hidden");
		c.classList.remove("hidden");
	}
}

//Get Element aside von mitFahrgelegenheit

function getMitfarergelegenheitenForm1(){
	let token = sessionStorage.getItem('loginToken');
}

// aside Element hiden
function hidenAsideElement(){
	const element = document.querySelector("#asideElement");
	element.classList.add("hidden");
}



//Show map
function showMap(){
	const element3 = document.querySelector("#map-container");
	element3.classList.remove("hidden");
}

//Get Form neuer User Registrieren
function neurUserRegistrieren(){
	var registerForm = document.getElementById("neuUserRegister");
	document.querySelector("#neuUserRegister").style.display = "block";
}



function getUserInfo(userId) {

	return fetch("demo/access/userInfo", {
		method: 'get',
		headers: {
			'Content-type': 'application/json'
		}
	});
}





function suchen(){
	var counter1 =0;
    

	let token = sessionStorage.getItem('loginToken');

	var fahrt = document.getElementById("fahrt").value;
	var hinfahrt = document.getElementById("ruckfahrt").value;
	var hinruckfahrt = document.getElementById("hinruckfahrt").value;
	var distance = document.getElementById("distance").value;
	var weeks = document.getElementById("weeks").value;
	var time = document.getElementById("time").value;



	fetch('demo/user?distance='+ distance + "&token="+ token, {
		method: 'get',
		headers: {
			'Content-type': 'application/json'
		},
	})
		.then(response => response.json())
		.then(data => {
			console.log(data);


			for (let i=0;i<data.length;i++){
				
				
				
    // die blauen Marker werden hingelegt aber nicht auf den schwarzen gleichzeitig
				if (data[i].position.latitude != sessionStorage.getItem("current_latitude") && data[i].position.longitude != sessionStorage.getItem("current_longitude")){
					var maker = L.marker([data[i].position.latitude, data[i].position.longitude],{
						icon: blueIcon
					}).addTo(myMap);
					arr.push(maker);// maker werden hinzugefügt 
					for (all of arr){
				all.on('click',event=>changeIcon(event,data,maker))// jeder marker wird weitergegeben
			}
					
				}
				

				
			    

				
				

				var mytable = document.getElementById("myTable");
				//User positionen
				var userName = data[i].username + " "+ data[i].lastname;
				var userEmail = data[i].email;
				var userAdresse = data[i].street +""+data[i].streetNumber
					+", "+data[i].zip+ " "+data[i].city;
					var pos= data[i].position.latitude;

				var row = `<div id="myId`+counter1+`"` + `style="background-color:white;font-size:10px;margin-top: 2px;   display: grid;row-gap: 50px;grid-template-columns: auto auto auto;padding: 5px;">
                <div style="border: 1px solid rgba(0, 0, 0, 0);
							  padding: 10px;
							  font-size: 10px;
							  text-align: center;">
                    <img alt="" src="imgs/profile-2.png" style="height:50px;width:50px;">
                </div>

                <div style="border: 1px solid rgba(0, 0, 0, 0);
					  padding: 10px;
					  font-size: 10px;
					  text-align: center;">
                    <table>
                    <tr>
                        <td>${userName}</td>
                        
                       
                    </tr>
                    <tr><td>${userEmail}</td></tr>
                    <tr><td>${userAdresse}</td></tr>
                    <tr><td id="newId`+counter1+`"` + `>${pos}</td></tr>
                    </table>
                </div>
            </div>`;
				mytable.innerHTML += row;
				counter1++;
				console.log(data[i].position.latitude);
				
				
			
			}
			
			
          

		})
		
		.catch((error) => {
			console.error('Error:', error);
			sessionStorage.removeItem('loginToken');
			document.querySelector("#loginError").innerHTML = "Es ist ein Fehler aufgetreten!";
		});

}


function changeIcon(event,data,all) {
	
	
		let i=0;
			while( i<arr.length){
				if(arr[i].getLatLng() === event.latlng){// positionen werden abgeglichen, falls sie gleich sind werden die grau Div gefarbt
					console.log(arr[i].getLatLng());
					console.log(all);
	

		var kleinDiv=document.getElementById("newId"+i);
		var bigDiv=document.getElementById("myId"+i);
	
      
		
		
		
		var userName = data[i].username + " "+ data[i].lastname;
				var userEmail = data[i].email;
				var userAdresse = data[i].street +""+data[i].streetNumber
					+", "+data[i].zip+ " "+data[i].city;
					var pos= data[i].position.latitude;
					
					
					bigDiv.innerHTML= `<div style="background-color:#d8d8d8;font-size:10px;margin-top: 2px;   display: grid;row-gap: 50px;grid-template-columns: auto auto auto;padding: 5px;">
                <div style="border: 1px solid rgba(0, 0, 0, 0);
							  padding: 10px;
							  font-size: 10px;
							  text-align: center;">
                    <img alt="" src="imgs/profile-2.png" style="height:50px;width:50px;">
                </div>

                <div style="border: 1px solid rgba(0, 0, 0, 0);
					  padding: 10px;
					  font-size: 10px;
					  text-align: center;">
                    <table>
                    <tr>
                        <td>${userName}</td>
                        
                       
                    </tr>
                    <tr><td>${userEmail}</td></tr>
                    <tr><td>${userAdresse}</td></tr>
                    <tr><td>${pos}</td></tr>
                    </table>
                </div>
            </div>`;
         

			
		
		
		
				
	L.marker([event.latlng.lat, event.latlng.lng],{
		icon: redIcon
	}).addTo(myMap);
				}
		
	
	i++;	
	}
		}
	
	
	
	
	
	

	


