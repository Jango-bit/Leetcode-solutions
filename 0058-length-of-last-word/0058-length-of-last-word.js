var lengthOfLastWord = function(s) {
    s = s.trim();
    let lastSpaceIndex = s.lastIndexOf(" "); 
    return s.length - lastSpaceIndex - 1; 
}
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
