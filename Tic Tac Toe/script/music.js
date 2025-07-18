
function loaded(){
    var ambience = document.getElementById("ambience");
    ambience.volume = 0.4;  
}

function playLoopingSong() {
   var ambience = document.getElementById("ambience");
   ambience.play();
}

function sound_invalid_move(){
    var x = document.getElementById("wrong-move");
    x.play();
}

function sound_move(){
    var x = document.getElementById("move");
    x.play();
}

function sound_start(){
    var x = document.getElementById("start");
    x.play();
}

function sound_win(){
    var x = document.getElementById("win");
    x.play();
}

function sound_lose(){
    var x = document.getElementById("lose");
    x.play();
}

function sound_draw(){
    var x = document.getElementById("draw");
    x.play();
}

function sound(){
    var ambience = document.getElementById("ambience");
    ambience.volume = 0.4;

    var x = document.getElementById("win");
    x.volume = 1;

    var x = document.getElementById("start");
    x.volume = 1;

    var x = document.getElementById("lose");
    x.volume = 1;

    var x = document.getElementById("wrong-move");
    x.volume = 1;

    var x = document.getElementById("move");
    x.volume = 1;

    var x = document.getElementById("draw");
    x.volume = 1;
}

function mute(){
    var ambience = document.getElementById("ambience");
    ambience.volume = 0;

    var x = document.getElementById("win");
    x.volume = 0;

    var x = document.getElementById("start");
    x.volume = 0;

    var x = document.getElementById("lose");
    x.volume = 0;

    var x = document.getElementById("wrong-move");
    x.volume = 0;

    var x = document.getElementById("move");
    x.volume = 0;

    var x = document.getElementById("draw");
    x.volume = 0;
}

function sound_button(){
    var x = document.getElementsByClassName("sound")[0];
    var y = document.getElementsByClassName("msindo")[0];
    

    if (x.getAttribute("name") === "m"){
        
        x.setAttribute("name","s");
        y.setAttribute("name","s");

        x.src = "icons/sound.svg";
        y.src = "icons/sound.svg";

        sound();
    }else{
        x.setAttribute("name","m");
        y.setAttribute("name","m");

        x.src = "icons/mute.svg";
        y.src = "icons/mute.svg";

        mute();

    }
}

