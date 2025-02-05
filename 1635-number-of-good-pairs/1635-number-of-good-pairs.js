var numIdenticalPairs = function(nums) {
    let count = {};
    let goodPairs = 0;
    
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        
      
        if (count[num]) {
            goodPairs += count[num];  
            count[num] += 1;
        } else {
            count[num] = 1; 
        }
    }
    
    return goodPairs;
};
console.log(numIdenticalPairs([1,2,3,1,1,3]))