var firstPalindrome = function(words) {
   for(i=0;i<words.length;i++){
       let word=words[i]
       if(word==word.split('').reverse().join("")){
                  return word

       }
       
       
   }
   return ""
};
console.log(firstPalindrome( ["abc","car","ada","racecar","cool"]))