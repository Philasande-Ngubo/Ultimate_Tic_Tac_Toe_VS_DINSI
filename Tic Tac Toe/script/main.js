function pressed(sqr){

    if ( ispressed(sqr) ){
        sound_invalid_move();
    }
    else{
        press(sqr);
        thathaDinsi();
    }

}


function playEasy(){
    window.mode ='E';
    toMain();
}

function playMid(){
    window.mode ='M';
    toMain();
}

function playHard(){

    window.mode ='H';
    toMain();
}

function toMain(){
    window.Game_State = ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-']
    window.current = 'x';
    window.player = Math.floor(Math.random() * 2) + 1;
    window.player = 2;

    window.Dinsi = 'o';
    window.user =  'x';
    if (window.player == 2){
        window.Dinsi = 'x';
        window.user =  'o';
    }
    updateTurn();
   
    window.translate = ['z','i','ii','iii', 'iv', 'v', 'vi', 'vii', 'viii']
    
    var x = document.getElementsByClassName("menu welcome")[0];
    var y = document.getElementsByClassName("menu main")[0];

    x.id = "hide";
    y.id = "show";
    sound_start();
    clear_tiles();

    enableTouch();
    if (window.player == 2){
        thathaDinsi();
    }

}

function toWelcome(){
    var x = document.getElementsByClassName("menu welcome")[0];
    var y = document.getElementsByClassName("menu main")[0];

    y.id = "hide";
    x.id = "show";

    y.style.filter = "blur(0px)";

    var x = document.getElementsByClassName("message")[0];
    x.style.display = "none";


}

function updateTurn(){
    const mbhalo = document.getElementsByClassName("turn")[0];

    mbhalo.textContent = "Your Turn";
    if (window.player === 2){
        mbhalo.textContent = "Dinsi's Turn";
    }
}

function ispressed(sqr){
    return (window.Game_State[sqr] !== "-") ;
}

function press(sqr){
    var tile = document.getElementsByClassName(window.translate[sqr])[0];

    if (window.current ==='x'){
        tile.style.backgroundImage = "url('images/player_1.png')";
        window.Game_State[sqr] ='x';
        window.current = 'o';
    }else{
        tile.style.backgroundImage = "url('images/player_2.png')";
        window.Game_State[sqr] ='o';
        window.current = 'x';
    }
    sound_move();
    updateTurn();
    gameOver();
}

function clear_tiles(){
    for (let i =0; i < 9; i++){
        var tile = document.getElementsByClassName(window.translate[i])[0];
        tile.style.backgroundImage = "url('images/image.png')";
    }
}

function thathaDinsi(){
    press(bestMove());

}