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


    document.getElementById("zegar").innerHTML = 
    godzina+":"+minuta+":"+sekunda;

    setTimeout("odliczanie()",1000);
}