
function play_parar(){
    let playPause=document.getElementById("player");

    if(playPause.paused ){
        playPause.play(); 
        document.getElementById("play").src="img/pause.jpg";
    }else{
        playPause.pause();
        document.getElementById("play").src="img/play.png";

    }
}   

function stop(){
    let stop=document.getElementById("player");

    if(!stop.paused){
        stop.pause();
        stop.currentTime=0;
        document.getElementById("play").src="img/play.png";
    }
}

function nombre_canciones(){
    let songs=["WOS_LLENO_DE_ZAFIROS.wav","XXXTENTACION.mp3","Voz.m4a","DUKI_Rockstar.ogg"];
    let nombreCanciones=document.getElementById("nombreCancion");
    nombreCanciones.textContent=songs[contador];
}

function next(){
    let songs=["WOS_LLENO_DE_ZAFIROS.wav","XXXTENTACION.mp3","Voz.m4a","DUKI_Rockstar.ogg"];
    let contador=0;
    let seguir=false;
    contador++;


    if(contador==songs.length){
        contador=0;
    }
    songs.src="songs/"+songs[contador];
    seguir ? songs.play():"";
    nombre_canciones();
}