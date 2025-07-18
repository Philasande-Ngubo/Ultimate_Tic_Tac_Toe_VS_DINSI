function bestMove(){
    if ( getEmptySlots().length === 9){
        return [0, 2, 4, 6, 8][RandInt(0, 4)];
    }
    else{

        if (window.mode == 'H'){
            return Hard();
        }

        if ( shouldBlock(window.user).length ==0 ){
            if (window.mode == 'E'){
                return getEmptySlots()[RandInt(0, getEmptySlots().length -1)];
            }else{
                return Mid();
            }
        }
        else{
             return getEmptySlots()[RandInt(0, getEmptySlots().length -1)];
        }
        

    }
}


function Mid(){
    if ( shouldBlock(window.Dinsi).length !=0 ){
        return shouldBlock(window.Dinsi)[0];
    }else{
        return MidCompute();
    }
}

function Hard(){

    if( shouldBlock(window.Dinsi).length != 0){
        return shouldBlock(window.Dinsi)[0];
    }

    if( shouldBlock(window.user).length != 0){
        return shouldBlock(window.user)[0];
    }

    for (let i =0; i < getEmptySlots().length ; i++){
        window.Game_State[getEmptySlots[i]] = window.user;
        if (shouldBlock(window.user) == 2 ){ 
            window.Game_State[getEmptySlots[i]] = '-';
            return shouldBlock(window.user)[0];}
        window.Game_State[getEmptySlots[i]] = '-';
    }

    for (let i =0; i < getEmptySlots().length ; i++){
        window.Game_State[getEmptySlots[i]] = window.user;
        if (shouldBlock(window.user) == 1 ){ 
            window.Game_State[getEmptySlots[i]] = '-';
            return shouldBlock(window.user)[0];}
        window.Game_State[getEmptySlots[i]] = '-';
    }

    for (let i =0; i < getEmptySlots().length ; i++){
        window.Game_State[getEmptySlots[i]] = window.Dinsi;
        if (shouldBlock(window.Dinsi) == 2 ){ 
            window.Game_State[getEmptySlots[i]] = '-';
            return shouldBlock(window.Dinsi)[0];}
        window.Game_State[getEmptySlots[i]] = '-';
    }

    for (let i =0; i < getEmptySlots().length ; i++){
        window.Game_State[getEmptySlots[i]] = window.Dinsi;
        if (shouldBlock(window.Dinsi) != 0 ){ 
            window.Game_State[getEmptySlots[i]] = '-';
            return shouldBlock(window.Dinsi)[0];}
        window.Game_State[getEmptySlots[i]] = '-';
    }

    return getEmptySlots()[RandInt(0, getEmptySlots().length -1)];

}


function MidCompute(){
    for (let i =0; i < getEmptySlots().length ; i++){
        window.Game_State[getEmptySlots[i]] = window.Dinsi;

        if (shouldBlock(window.Dinsi) != 0 ){
            window.Game_State[getEmptySlots[i]] = '-';
            return shouldBlock(window.Dinsi)[0];}

        window.Game_State[getEmptySlots[i]] = '-';
    }
    return getEmptySlots()[RandInt(0, getEmptySlots().length -1)];
}

function RandInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}