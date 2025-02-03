var mostWordsFound = function(sentences) {
    let largestLength = 0;
    
    for (let i = 0; i < sentences.length; i++) {
        let wordCount = sentences[i].split(' ').length;
        if (wordCount > largestLength) {
            largestLength = wordCount;
        }
    }
    return largestLength; 
};
console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
console.log(mostWordsFound(["please wait","continue to fight","continue to win"]));
