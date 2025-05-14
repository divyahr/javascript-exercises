const removeFromArray = function(arr, ...vals) {
    for (i=0; i<arr.length; i++){
        for (let val of vals){
            if(arr[i] === val){
                arr.splice(i,1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
