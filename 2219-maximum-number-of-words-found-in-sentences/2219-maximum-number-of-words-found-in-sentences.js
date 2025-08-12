/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max =0;
   
    for(i=0;i<sentences.length;i++){
         let spli = sentences[i].split(" ")

        if(spli.length>max){
            max=spli.length;
        }
    }
    return max;
    
    
};