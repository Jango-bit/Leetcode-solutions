var containsDuplicate = function(nums) {
    let seen = new Set(); // Create a Set to track unique numbers
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) { 
            return true;
        }
        seen.add(nums[i]); 
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));


