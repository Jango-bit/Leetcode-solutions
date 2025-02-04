
var scoreOfString = function(s) {
    let sum=0;
    for(i=0;i<s.length-1;i++){
        sum+=Math.abs(s.charCodeAt(i)-s.charCodeAt(i+1))
    }
    return sum
    
};
console.log(scoreOfString("hello"))

 console.log(scoreOfString("zaz"))