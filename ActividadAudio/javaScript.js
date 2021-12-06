//Arrays
var canciones=["DUKI_Rockstar.ogg","Voz.m4a","WOS_LLENO_DE_ZAFIROS.wav","XXXTENTACION.mp3"];
var cancionesIMG=["https://i.scdn.co/image/ab67616d0000b273b3953863e4455d10e8f8966d","Voz_Audio_Erik.png","https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/c/0/6/e/1193901637322112.jpg","https://m.media-amazon.com/images/I/51i7IrTwb4L._AC_SY741_.jpg"];
//Elementos
var audio=document.getElementById("player");
var nombreCanciones=document.getElementById("nombreCancion");
var imgCanciones= document.getElementById("img");
//Booleanos
var seguir=true;
var random=false;
//Contador
var contador=0;


function Nombres_canciones(){
    
    nombreCanciones.textContent=canciones[contador];

}
function IMG_caciones(){

    imgCanciones.src=cancionesIMG[contador];

}

//Funcion para parar y hacer que continue una canción en el mismo boton
function Play_parar(){

    if(!audio.paused && !audio.ended){
        audio.pause();
        seguir=false;
        document.getElementById("play").src="img/play.png";
    }else{
        audio.src="canciones/"+canciones[contador];
        audio.play(); 
        seguir=true;
        document.getElementById("play").src="img/pause.jpg";
    }
Nombres_canciones();
IMG_caciones();
}   

//Funcion para parar y que la cancion se reinicie
function Stop(){
   
    if(!stop.paused){
        audio.pause();
        seguir=false;
        audio.currentTime=0;
        document.getElementById("play").src="img/play.png";
    } 
Nombres_canciones();
IMG_caciones();
}

//Funcion para que ir a la cancion anterior
function Previous(){

    contador--;

    if(contador<0){
        contador=canciones.length -1;
    }
    audio.src="canciones/"+canciones[contador];
    if(seguir!=true){
        Play_parar();
    }
Nombres_canciones();
IMG_caciones();
}

//Funcion para que ir a la siguiente cancion
function Next(){

    contador++;

    if(contador==canciones.length){
        contador=0;
    }
    audio.src="canciones/"+canciones[contador];
    if(seguir!=true){
        Play_parar();
    }
Nombres_canciones();
IMG_caciones();
}

//Funcion para que se aleatorice la seleccion de la cancion
function Random(){

    let r;
    let aux;
    if(random==false){

        for(let i=canciones.length -1;i>0;i--){
            r = Math.floor(Math.random*(i+1));

            aux=canciones[i];
            canciones[i]=canciones[r]
            canciones[r]=aux;
            random=true;
            document.getElementById("random").src="img/random.png";
        }

    }else{
       
        random=false;
        canciones=["DUKI_Rockstar.ogg","Voz.m4a","WOS_LLENO_DE_ZAFIROS.wav","XXXTENTACION.mp3"];
        document.getElementById.src="img/random.png";

    }
    
    if(seguir!=true){
        audio.src="canciones/"+canciones[contador];
        audio.play();
    }
Nombres_canciones;
IMG_caciones();
}