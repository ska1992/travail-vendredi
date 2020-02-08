var nombreetages = prompt("entrez nombre d'etages", "");

var etage = "#";
for ( var i=0; i<nombreetages; i++){
	var espaces = "";
	for(var j = i; j<nombreetages - 1; j++){
		espaces = espaces + " ";
	}
	var actulaetage = espaces + etage + espaces
	console.log(actulaetage)
	etage = "#"+etage+"#"
}