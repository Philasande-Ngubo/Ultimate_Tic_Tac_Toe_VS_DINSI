function getEmptySlots(){
    const empty = [];
    for ( let i =0; i < 9; i++){
        
        if ( window.Game_State[i] == '-' ){
            empty.push(i);
        }
    }

    return empty;
}

function Won(){
    wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],
            [1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    
    
    for (let j =0; j <8; j++){

        let xs = 0;
        let os = 0;
        for (let i =0; i < 3; i++){

            if ( window.Game_State[wins[j][i]] == 'x'){
                ++xs;
            }

            if ( window.Game_State[wins[j][i]] == 'o'){
                ++os;
            }
        }

        if (xs == 3){
            window.jay = j;
            return window.player;
        }

        if (os == 3){
            window.jay = j;
            return (window.player*-1) + 3;
        }
        
    }// 2 if Dinsi won else 1 if player won
    
    return -1; //no one won
}

function gameOver(){
    if ( (Won() === -1) && (getEmptySlots().length === 0) ){
        sound_draw();
        animate_draw();
    } 

    if (Won() == 1){
        sound_win();
        victoryDance();
        animate_win();
        
    }

    if (Won() == 2){
        sound_lose();
        victoryDance();
        animate_lose();
    }
} 


function shouldBlock(player){
    const blocks = [];
    wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],
            [1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    for (let j =0; j <8; j++){

        let target = 0;
  
        for (let i =0; i < 3; i++){

            if ( window.Game_State[wins[j][i]] == player){
                ++target;
            }
        }

        if (target === 2){
            for (let i =0; i < 3; i++){

            if ( window.Game_State[wins[j][i]] == '-'){
                blocks.push( wins[j][i] );
            }
         }
        }

    }
    return blocks;
}


async function victoryDance(){
    disableTouch();
    wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],
            [1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    for (let i  = 0; i < 3; i++){
        var tile = document.getElementsByClassName(window.translate[ wins[window.jay][i] ])[0];
        tile.style.backgroundSize = "10vh 10vh";
    }

    await sleep(800);

    for (let i  = 0; i < 3; i++){
        var tile = document.getElementsByClassName(window.translate[ wins[window.jay][i] ])[0];
        tile.style.backgroundSize = "12vh 12vh";
    }

    await sleep(800);

    for (let i  = 0; i < 3; i++){
        var tile = document.getElementsByClassName(window.translate[ wins[window.jay][i] ])[0];
        tile.style.backgroundSize = "10vh 10vh";
    }

    await sleep(800);

    for (let i  = 0; i < 3; i++){
        var tile = document.getElementsByClassName(window.translate[ wins[window.jay][i] ])[0];
        tile.style.backgroundSize = "12vh 12vh";
    }

    await sleep(800);

    for (let i  = 0; i < 3; i++){
        var tile = document.getElementsByClassName(window.translate[ wins[window.jay][i] ])[0];
        tile.style.backgroundSize = "10vh 10vh";
    }

    await sleep(800);

    for (let i  = 0; i < 3; i++){
        var tile = document.getElementsByClassName(window.translate[ wins[window.jay][i] ])[0];
        tile.style.backgroundSize = "12vh 12vh";
    }

    await sleep(800);

    for (let i  = 0; i < 3; i++){
        var tile = document.getElementsByClassName(window.translate[ wins[window.jay][i] ])[0];
        tile.style.backgroundSize = "10vh 10vh";
    }

    await sleep(800);

    for (let i  = 0; i < 3; i++){
        var tile = document.getElementsByClassName(window.translate[ wins[window.jay][i] ])[0];
        tile.style.backgroundSize = "12vh 12vh";
    }


}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function disableTouch(){
    for (let i = 0; i < 9; i++ ){
        var tile = document.getElementsByClassName(window.translate[i])[0];
        tile.setAttribute( "onClick", "javascript: none();" );
    }
}

function enableTouch(){
    for (let i = 0; i < 9; i++ ){
        var tile = document.getElementsByClassName(window.translate[i])[0];
        tile.setAttribute( "onClick", "javascript: pressed("+String(i)+");" );
        
    }
}

function none(){}


function animate_draw(){
    document.getElementsByClassName("menu main")[0].style.filter = "blur(4px)";
    var x = document.getElementsByClassName("message")[0];
    x.style.display = "block";
    x.style.backgroundColor = '#008DF0';

    document.getElementById("sthombe").src ="images/gifs/draw.gif";

    document.getElementById("mess").innerHTML = "It's<br>a Draw";
}

function animate_win(){
    document.getElementsByClassName("menu main")[0].style.filter = "blur(4px)";
    var x = document.getElementsByClassName("message")[0];
    x.style.display = "block";
    x.style.backgroundColor = '#008DF0';

    document.getElementById("sthombe").src ="images/gifs/win.gif";
    document.getElementById("mess").innerHTML = "You<br>WON !!!";
}

function animate_lose(){
    document.getElementsByClassName("menu main")[0].style.filter = "blur(4px)";
    var x = document.getElementsByClassName("message")[0];
    x.style.display = "block";
    x.style.backgroundColor = 'red';

    document.getElementById("sthombe").src ="images/gifs/lose-1.gif";

    if ( window.mode == "E"){
        document.getElementById("sthombe").src ="images/gifs/lose.gif";
    }

    document.getElementById("mess").innerHTML= "You<br>LOST !!!";
}

