/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    let num=x.toString();
    let reversed=num.split("").reverse().join("");
    let same = num==reversed;
    return same;
    
};