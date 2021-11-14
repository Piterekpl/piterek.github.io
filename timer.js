function odliczanie()
{
	var dzisiaj = new Date();
	var dzien = dzisiaj.getDate();
	var miesiac = dzisiaj.getMonth() +1;
	var godzina = dzisiaj.getHours(); 
	var minuta = dzisiaj.getMinutes();
	if(minuta<10) minuta = "0"+ minuta;
	var sekunda = dzisiaj.getSeconds();
	if(sekunda<10) sekunda = "0"+ sekunda;
			
			
	document.getElementById("zegar").innerHTML = godzina+":"+minuta+":"+sekunda;
			
	setTimeout("odliczanie()",1000);
}
var numer = Math.floor(Math.random()*5)+1;
			
var timer1 = 0;
var timer2 = 0;
			
			
function ustawslajd(nrslajdu)
			{
				clearTimeout(timer1);
				clearTimeout(timer2);
				numer = nrslajdu - 1;
				
				schowaj();
				setTimeout("zmienslajd()", 500);
				
			}
			
			function schowaj()
			{
				$("#slider").fadeOut(500);
			}
		
			var numer = Math.floor(Math.random()*5)+1;
			function schowaj()
			{
				$("#slider").fadeOut(500);
	
	
			}
	
			function zmiens()
			{
				numer++; if(numer>5) numer=1;
	
				var plik ="<img src=\"slajdy/w"  + numer + ".jpeg\"  />";
	
				document.getElementById("slider").innerHTML = plik
				$("#slider").fadeIn(500);
				setTimeout("zmiens()",5000);
				setTimeout("schowaj()",4500);
			}



	
	
	
				