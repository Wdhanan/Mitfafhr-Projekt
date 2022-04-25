/**
 * 
 */
var eingabe= prompt("Bitte Geben einen String ein ");

function palindrom(eingabe){
	
for(var i =0,  j= eingabe.length-1; i<j; i++,j--){
	
	if(eingabe.charAt(i)!=eingabe.charAt(j)){
		return false;
	}
	
	}	


return true;	
}

if(palindrom(eingabe)){
	document.write(eingabe +" ist ein Palindrom");
	
}
else{
	document.write(eingabe +" ist kein Palindrom");
	
}
