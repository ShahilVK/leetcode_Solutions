/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let number = num.toString();
    let count = 0;
    for(i=0;i<number.length;i++){
        let digit = Number(number[i]);
        if(num%digit ==0 && digit!==0){
            count++;
        }
    }
    return count;
    
};