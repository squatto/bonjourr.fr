// Signature aléatoire
$(document).ready(function() {
    var quotes = new Array("<p>Made in France with ❤️<br> by <a href='https://victor-azevedo.me/'>Victor Azevedo</a> & <a href='https://tahoe.be'>Tahoe Beetschen</a></p>", "<p>Made in France with ❤️<br> by <a href='https://tahoe.be'>Tahoe Beetschen</a> & <a href='https://victor-azevedo.me/'>Victor Azevedo</a></p>");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.signature').append(quotes[randno]);
});

// //Recaptcha
// grecaptcha.ready(function() {

// 	grecaptcha.execute('6LfLHqcUAAAAAO0PzSW4SEPridOLlAQFWSOjl-eE', {action: 'homepage'}).then(function(token) {

// 	  document.getElementById("token").value = token;
// 	});

// });

//Commence à charger la vidéo quand les autres éléments ont fini de charger
window.onload = function() {
	 document.getElementById('insert_video').innerHTML = '<video id="screen" autoplay="autoplay" loop="loop" muted="muted"><source type="video/mp4" src="src/images/notagif.mp4"></video>';
}

window.onload = function() {
	    var e = document.getElementById("fooDiv");
		    e.parentNode.removeChild(e);
		}();



//Détermine si mobile ou pas
function checkMobile() {
	var Mobile = true;

	if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		return true;
	}
	else {
		return false;
	}
}

//Si mobile, n'affiche pas le lien online dans le nav
if (checkMobile()) $("a.online").css("display", "none");

