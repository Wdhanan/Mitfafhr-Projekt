/**
 * 
 */

function login() {

	let data = {
		username: document.querySelector("#username").value,
		password: document.querySelector("#password").value
	};

	fetch('demo/access', {
		method: 'post',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => response.json())
		.then(data => {
			document.getElementById("myusernam").innerHTML = "Willkommen "+ document.querySelector("#username").value+"!";

			console.log("Login Token " + data.token);
			sessionStorage.setItem('loginToken', data.token);
			setVisibilityHeader(true);
			
			//Show User Info
			let username = document.querySelector("#username").value;
			getUserData(username,data.token);

			//AsideDiv hiden
			setVisibility("find-ride-container", false);
		})
		.catch((error) => {
			console.error('Error:', error);
			sessionStorage.removeItem('loginToken');
			document.querySelector("#loginError").innerHTML = "Es ist ein Fehler aufgetreten!";
		});
}

function getUserData(username,token){
	fetch('demo/user/get?userName='+username+"&token="+token, {
		method: 'get',
		headers: {
			'Content-type': 'application/json'
		}
	})
		.then(response => response.json())
		.then(data => {
			// weekday setzen
			console.log("new id"+ data.user_id)
			setTimeWeekday(data.user_id,token);
			sessionStorage.setItem("user_iD",data.user_id);
			//Set Marker
			var meinIcon = L.icon({
				iconUrl:'/imgs/home-location.png',
				iconSize:[50,55]
			});

			L.marker([data.position.latitude, data.position.longitude],{icon:meinIcon}).addTo(myMap);
// positionen werden hingesetzt um spater den blauen Marker nicht gleichzeitig auf den schwarzen zu legen
			sessionStorage.setItem('current_latitude',data.position.latitude);
			sessionStorage.setItem('current_longitude',data.position.longitude);


// user adresse wird vor dem Stundenplan geschrieben
			document.getElementById("useradresse").innerHTML =
				data.street+ " "+data.streetNumber+", "+
			data.zip+" "+data.city;
			


		})
		.catch((error) => {
			console.error('Error:', error);
			sessionStorage.removeItem('loginToken');
			document.querySelector("#loginError").innerHTML = "Es ist ein Fehler aufgetreten!";
		});
}

function stundeRegis(data){
	console.log(data);
	fetch('demo/weekday/save', {
		method: 'put',
		headers: {
			'Content-type': 'application/json'
		},
		body:JSON.stringify(data)

	}).catch((error) => {
			console.error('Error:', error);
			sessionStorage.removeItem('loginToken');
			document.querySelector("#loginError").innerHTML = "Die Daten wurde nicht hinzugefügt!";
		});
}


function getUserDataWitAjax(username,token){
	let xhttp = new XMLHttpRequest();
	xhttp.onload = function (){
		var meinIcon = L.icon({
			iconUrl:'/imgs/home-location.png',
			iconSize:[50,55]
		});

		L.marker([data.position.latitude, data.position.longitude],{icon:meinIcon}).addTo(myMap);
	}
	xhttp.open('GET','demo/user/get?userName='+username+"&token="+token)
	xhttp.send();
}

function setTimeWeekday(user_id,token){
	fetch('demo/weekday/get?id='+user_id+"&token="+token, {
		method: 'get',
		headers: {
			'Content-type': 'application/json'
		}
	})
		.then(response => response.json())
		.then(data => {
			
			if(data != null){

				for (let i=0;i<data.length;i++){
					if (data[i].weekday === 1){
						document.getElementById("montag0").value = data[i].startTime;
						document.getElementById("montag1").value = data[i].endTime;
					}
					if (data[i].weekday === 2){
						document.getElementById("dienstag0").value = data[i].startTime;
						document.getElementById("dienstag1").value = data[i].endTime;
					}
					if (data[i].weekday === 3){
						document.getElementById("mittwoch0").value = data[i].startTime;
						document.getElementById("mittwoch1").value = data[i].endTime;
					}
					if (data[i].weekday === 4){
						document.getElementById("donnerstag0").value = data[i].startTime;
						document.getElementById("donnerstag1").value = data[i].endTime;
					}
					if (data[i].weekday === 5){
						document.getElementById("freitag0").value = data[i].startTime;
						document.getElementById("freitag1").value = data[i].endTime;
					}
					if (data[i].weekday ===6){
						document.getElementById("samstag0").value = data[i].startTime;
						document.getElementById("samstag1").value = data[i].endTime;
					}
					if (data[i].weekday === 7){
						document.getElementById("sonntag0").value = data[i].startTime;
						document.getElementById("sonntag1").value = data[i].endTime;
					}
				}
			}


		})
		.catch((error) => {
			console.error('Error:', error);
			sessionStorage.removeItem('loginToken');
			document.querySelector("#loginError").innerHTML = "Es ist ein Fehler aufgetreten!";
		});
}

function speichernStunden(){
	
	let user_id = sessionStorage.getItem("user_iD");
	let token = sessionStorage.getItem("loginToken");

	if (user_id != null && token != null){

		let data1 = {
			user_id:user_id,
			weekday: 1,
			start_time:document.getElementById("montag0").value,
			end_time:document.getElementById("montag1").value,

		}

		let data2 = {
			user_id:user_id,
			weekday:2,
			start_time:document.getElementById("dienstag0").value,
			end_time:document.getElementById("dienstag1").value,
		}

		let data3 = {
			user_id:user_id,
			weekday:3,
			start_time:document.getElementById("mittwoch0").value,
			end_time:document.getElementById("mittwoch1").value,
		}

		let data4 = {
			user_id:user_id,
			weekday:4,
			start_time:document.getElementById("donnerstag0").value,
			end_time:document.getElementById("donnerstag1").value,
		}

		let data5 = {
			user_id:user_id,
			weekday:5,
			start_time:document.getElementById("freitag0").value,
			end_time:document.getElementById("freitag1").value,
		}
		let data6 = {
			user_id:user_id,
			weekday:6,
			start_time:document.getElementById("samstag0").value,
			end_time:document.getElementById("samstag1").value,
		}

		let data7 = {
			user_id:user_id,
			weekday:7,
			start_time:document.getElementById("sonntag0").value,
			end_time:document.getElementById("sonntag1").value,
		}

let ergerbnis = [data1,data2,data3,data4,data5,data6,data7];
		

		for (let element of ergerbnis){
			if (element.start_time.length === 0 && element.end_time.length === 0){
				console.log(element);
			}
			else {
				let a = {
					user_id:element.user_id,
					weekday:element.weekday,
					start_time:element.start_time,
					end_time:element.end_time,
				}
				stundeRegis(a)
				console.log(a);
			}
		}

	}

}



