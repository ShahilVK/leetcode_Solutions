/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let sentences = sentence.toLowerCase();
    let fullalpha="abcdefghijklmnopqrstuvwxyz";
    for(let key of fullalpha){
        if(!sentences.includes(key)){
            return false;
        }
    }
    return true;


    
};