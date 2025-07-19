function bestMove(){
    if ( getEmptySlots().length === 9){
        return [0, 2, 4, 6, 8][RandInt(0, 4)];
    }

    if ( getEmptySlots().length === 8){
        
        if (window.Game_State[4] =='-' ){
            return 4;
        }else{
            return [0, 2, 6, 8][RandInt(0, 3)]
        }
    }
   
    if (window.mode != 'E'){
        
        if (shouldBlock(window.Dinsi).length > 0 ){
            return shouldBlock(window.Dinsi)[0];
        }

        if ( shouldBlock(window.user).length > 0){
            return shouldBlock(window.user)[0];
        }

        var temp_empty = getEmptySlots();
        for (let i = 0; i < temp_empty.length; ++i){    //check 2 shandisi steps
            window.Game_State[temp_empty[i]] = window.Dinsi;
            if ( shouldBlock(window.Dinsi).length == 2){
                window.Game_State[temp_empty[i]] = '-';
                return temp_empty[i];
            }

            window.Game_State[temp_empty[i]] = '-';
        }

        var temp_empty = getEmptySlots();
        for (let i = 0; i < temp_empty.length; ++i){    //check 2 shandisi steps
            window.Game_State[temp_empty[i]] = window.user;
            if ( shouldBlock(window.user).length == 2){
                window.Game_State[temp_empty[i]] = '-';
                return temp_empty[i];
            }

            window.Game_State[temp_empty[i]] = '-';
        }

    }


    return think();
}




function RandInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}