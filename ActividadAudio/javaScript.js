
function play_parar(){
    let playPause=document.getElementById("player");

    if(playPause.paused){
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
    }

}