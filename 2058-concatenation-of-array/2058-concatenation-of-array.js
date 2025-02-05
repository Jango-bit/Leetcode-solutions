
var getConcatenation = function(nums) {
    let array=[]
    const num=2
    for(i=1;i<=num;i++){
           for(j=0;j<nums.length;j++){
               array.push(nums[j])
           }
    }
    return array
    
};
console.log(getConcatenation([1,2,1]))
console.log(getConcatenation([1,3,2,1]))