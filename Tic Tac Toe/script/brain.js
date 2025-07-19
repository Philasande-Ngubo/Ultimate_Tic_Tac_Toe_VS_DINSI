//This is Dinsi's brain where he thinks by using miniMax algorithm

function think(){
    hlola();
    window.Vaule_Table = [];
    for (let i = 0; i < getEmptySlots().length; i++){
        window.Vaule_Table.push(0);
    }

    for (let i = 0; i < getEmptySlots().length; i++){
        var hypothetical_state = JSON.parse(JSON.stringify(window.Game_State));
        
        hypothetical_state[i] = window.Dinsi;
        jula(i, hypothetical_state);
        hypothetical_state[i] = '-';
    }

    return getEmptySlots()[optimalIndex()];
}


function hlola(){
    if (window.mode == 'E' ){ window.ukujula = 1000;}
    if (window.mode == 'M' ){ window.ukujula = 900;}
    if (window.mode == 'H' ){ window.ukujula = 7000;}
}

function jula(index,hypothetical_state ){
   
    for(let i = 0; i <window.ukujula; i++){
        let curre = window.user;
        var majukujuku_state = JSON.parse(JSON.stringify(hypothetical_state));

        while ( isTerminal(majukujuku_state) == -1){
            majukujuku_state[ possibleMoves(majukujuku_state)[ RandInt(0,possibleMoves(majukujuku_state).length -1 )] ] = curre;
            if ( curre == window.Dinsi){
                curre = window.user;
            }
            else { curre = window.Dinsi;}
        }

        if (isTerminal(majukujuku_state) == 0 ){ window.Vaule_Table[index]+=0;}
        if (isTerminal(majukujuku_state) == 1 ){ window.Vaule_Table[index]+=-1;}
        if (isTerminal(majukujuku_state) == 2 ){ window.Vaule_Table[index]+=1;}
        
    }
}


function optimalIndex(){
    let optiIndex = 0;
    for  (let i = 0; i < getEmptySlots().length; i++){
        if ( window.Vaule_Table[i] > window.Vaule_Table[optiIndex]){
            optiIndex =i;
        }
    }
    return optiIndex;
}


function possibleMoves(hypothetical_state){
    var results = [];
    for (let i =0; i < 9; i++){
        if (hypothetical_state[i]== '-' ){
            results.push(i);
        }
    }

    return results;
}


function isTerminal(hypothetical_state){

    wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],
            [1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    for (let j =0; j <8; j++){
        let dee  = 0;
        let useer = 0;
        for (let i =0; i < 3; i++){

            if ( hypothetical_state[wins[j][i]] == window.Dinsi){
                ++dee;
            }

            if ( hypothetical_state[wins[j][i]] == window.user){
                ++useer;
            }
        }

        if ( dee   == 3){ return 2;}
        if ( useer == 3){ return 1;}
    }

    if (isStealmate(hypothetical_state)){return 0;}
    return -1; // Game is still ongoing
    
}



function isStealmate(hypothetical_state){
    for (let i =0; i < 9; i++){
        if (hypothetical_state[i]== '-' ){
            return false;
        }
    }
    return true;
}




