function isIsogram(str) {
    const newstr = str.toLowerCase();

    const uniqueChars = new Set();

    for(const char of newstr) {
        if(/^[a-z]$/.test(char)) {
            if(uniqueChars.has(char)) {
                return false;
            }
            uniqueChars.add(char);
        }
    }
    return true;
}