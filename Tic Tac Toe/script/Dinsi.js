function bestMove(){
    if ( getEmptySlots().length === 9){
        return [0, 2, 4, 6, 8][RandInt(0, 4)];
    }
   
    if (window.mode != 'E'){
        
        if (shouldBlock(window.Dinsi).length > 0 ){
            return shouldBlock(window.Dinsi)[0];
        }

        if ( shouldBlock(window.user).length > 0){
            return shouldBlock(window.user)[0];
        }

    }
    return think();
}



function RandInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}