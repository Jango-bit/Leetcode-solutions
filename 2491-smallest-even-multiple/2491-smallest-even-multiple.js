/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    for(i=1;i<=500;i++){
        if(i%2==0&&i%n==0){
            return i
        }
    }
};