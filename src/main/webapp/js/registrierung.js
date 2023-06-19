function register(){
	let file = document.getElementById("profilbild").files[0];
	var reader = new FileReader();
			
	if (file) {
		
		reader.readAsDataURL(file);
				var username = document.getElementById("firstname").value;
				var firstname = document.getElementById("firstname").value;
				var lastname = document.getElementById("lastname").value;
				var street= document.getElementById("street").value;
				var streetNumber= document.getElementById("streetNumber").value;
				var zip= document.getElementById("zip").value;
				var city= document.getElementById("city").value;
				var email= document.getElementById("email").value;
				var benutzerId= document.getElementById("benutzerId").value;
				var password= document.getElementById("password1").value;
				var profilbild= reader.result;
				let user= sessionStorage.setItem('user',username);

			let data = {username,password,firstname,lastname,email,street,streetNumber,zip,city};
			registerUser(data);
		
		reader.onerror = function(error) {
			console.log('Error: ', error);
		}
		
	}
	else {
		let data = {
				username: document.querySelector("#firstname").value,
				password: document.querySelector("#password1").value,
				vorname: document.querySelector("#firstname").value,
				nachname: document.querySelector("#lastname").value,
				email: document.querySelector("#email").value,
				strasse: document.querySelector("#street").value,
				nr: document.querySelector("#streetNumber").value,
				plz: document.querySelector("#zip").value,
				ort: document.querySelector("#city").value,
				benutzerId: document.querySelector("#benutzerId").value,
				
				profilbild: ""
				 
		};
		let user= sessionStorage.setItem('user',username);
		registerUser(data);
	}}

function registerUser(data) {
	console.log(data);

	fetch("demo/access/save", {
		method: 'post',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => {
			if (!response.ok) {
				document.querySelector("#registerError").innerHTML = "Ein Fehler ist aufgetreten!";
				throw Error(response.statusText);
			}
			return response.json();
		})
		.then(data => {
			document.getElementById("myusernam").innerHTML = "Willkommen "+ document.querySelector("#firstname").value+"!";
			document.querySelector("#neuUserRegister").style.display = "none";
			sessionStorage.setItem('loginToken', data.token);
			console.log("Login Token " + data);
			setVisibilityHeader(true);
			
			var username= sessionStorage.getItem('user');
			var token=sessionStorage.getItem("loginToken");
			getUserData(username, token);
			

		setVisibility("find-ride-container", false);
		hidenAsideElement();
		})
		.catch(error => {
			sessionStorage.removeItem('loginToken');
			console.error('Error:', error);
		});
}
