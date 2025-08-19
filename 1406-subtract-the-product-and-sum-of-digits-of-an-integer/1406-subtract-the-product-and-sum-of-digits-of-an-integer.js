/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let sum=0;
    let spli = n.toString().split("");
    for(i=0;i<spli.length;i++){
        let digit=Number(spli[i]);{
            product = product*digit;
            sum=sum+digit;
        }
    }
    return product-sum;
    
};