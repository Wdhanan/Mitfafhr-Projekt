/**
 * 
 */
 var canvas = document.querySelector("#pwdCanvas");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 80, 10);

	function checkPassword() {
		var passwd = document.querySelector("#password1").value;

		var len = passwd.length;
		var regExHasTwoNumber = /\d\D+\d/;
		var regExHasSpecialSign = /[!§$&?]/;

		var hasMinLen = (len > 5);
		var hasTwoNumber = regExHasTwoNumber.test(passwd);
		var hasSpecialSign = regExHasSpecialSign.test(passwd);
		
		if( hasMinLen && hasTwoNumber && hasSpecialSign)
		{
			document.querySelector("#passwdMsg").innerHTML = "sehr sicher";
		}
		else if( hasMinLen && hasSpecialSign )
		{
			document.querySelector("#passwdMsg").innerHTML = "sicher";
		}
		else if( hasMinLen )
		{
			document.querySelector("#passwdMsg").innerHTML = "akzeptabel";
		}
		else
		{
			document.querySelector("#passwdMsg").innerHTML = "nicht sicher";
		}

		var size = 0;
		if (hasMinLen)
			size += 4;
		if (hasTwoNumber)
			size += 4;
		if (hasSpecialSign)
			size += 4;

		var c = document.querySelector("#pwdCanvas");
		var ctx = c.getContext("2d");

		ctx.fillStyle = "red";
		ctx.fillRect(0, 0, 80, 10);

		var grd = ctx.createLinearGradient(0, 0, size * 20, 0);
		grd.addColorStop(0, "green");
		grd.addColorStop(1, "red");

		ctx.fillStyle = grd;
		ctx.fillRect(0, 0, 80, 10);
	}
	
	
	
	
	var nameOk = false;
var plzOk = false;
var emailOk = false;
var vnameOk=false;

function checkIfAllOk()
{
	let allOk = nameOk && plzOk && emailOk && vnameOk;
	if( allOk )
	{
		document.querySelector("#btn").disabled=false;
	}	
	else
    {
		document.querySelector("#btn").disabled=true;
    }
}

function checkNameOnFocus()
{
	document.querySelector("#errorName").innerHTML = "";
}

function checkNameOnBlur()
{
	if( document.querySelector("#lastname").value.length == 0 )
		return;
	
	if( nameOk == false )
	{
	   document.querySelector("#errorName").innerHTML = "Format des Namens ist falsch";
	}
}

function checkName()
{
	let nameInput = document.querySelector("#lastname").value;
	if( nameInput.length === 0 )
	   return;
	
	let nameRegEx = /^[A-ZÄÖÜ][a-zäöüß]+(-[A-ZÄÖÜ][a-zäöüß]+)*$/;
	if( nameRegEx.test( nameInput ) == false )
	{
		nameOk = false;
	}
	else
	{
		nameOk = true;
	}
	checkIfAllOk();
}
function checkVNameOnFocus()
{
	document.querySelector("#errorVName").innerHTML = "";
}

function checkvNameOnBlur()
{
	if( document.querySelector("#firstname").value.length == 0 )
		return;
	
	if( vnameOk == false )
	{
	   document.querySelector("#errorVName").innerHTML = "Format des VorNamens ist falsch";
	}
}

function checkVName()
{
	let nameInput = document.querySelector("#firstname").value;
	if( nameInput.length === 0 )
	   return;
	
	let nameRegEx = /^[A-ZÄÖÜ][a-zäöüß]+(-[A-ZÄÖÜ][a-zäöüß]+)*$/;
	if( nameRegEx.test( nameInput ) == false )
	{
		vnameOk = false;
	}
	else
	{
		vnameOk = true;
	}
	checkIfAllOk();
}


function checkPlzOnFocus()
{
	document.querySelector("#errorPlz").innerHTML = "";
}

function checkPlzOnBlur()
{
	if( document.querySelector("#zip").value.length == 0 )
		return;	
	
   if( plzOk == false )
   {
	   document.querySelector("#errorPlz").innerHTML = "Format der Plz ist falsch";
   }
}


function checkPlz()
{
	   plzOk = false;
		
	   let telInput = document.querySelector("#zip").value;
	   if( telInput.length === 0 )
			return;
	   
	   let telRegEx = /\d{5}/;
	   if( telRegEx.test( telInput ) == false )
	   {
		   plzOk = false;
	   }
	   else
	   {
		   plzOk = true;
	   }
	   checkIfAllOk();	
}

function checkEmailOnFocus()
{
	document.querySelector("#errorEmail").innerHTML = "";
}

function checkEmailOnBlur()
{
	if( document.querySelector("#email").value.length == 0 )
		return;
	
	if( emailOk == false )
	{
	  document.querySelector("#errorEmail").innerHTML = "Format der E-Mail-Adresse ist falsch";
	}
}

function checkEmail()
{
	emailOk = false;
	
	let emailInput = document.querySelector("#email").value;
	if( emailInput.length === 0 )
		return;
	   
	let emailRegEx = /^\w{4}\d{4}@stud\.(hs-kl|fh-kl)\.de$/;
	if( emailRegEx.test( emailInput ) == false )
	{
		emailOk = false;
	}
	else
	{
		emailOk = true;
	}
	
	checkIfAllOk();
}







	

 