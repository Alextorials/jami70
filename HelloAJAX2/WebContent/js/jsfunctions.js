
function showHello(str){
var request = new XMLHttpRequest();

request.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
	console.log(request.responseText);
	document.getElementById("ServerResponse").innerHRML = request.responseText;
	}
};
request.open("GET", "saluto?user=" + str, true); //setto la richiesta verso il server
request.send(); //Invio

}