function reversedWords (str) {
    let newStr = str.split(" ")

    let reversedWordsArray = newStr.map(word => word.split('').reverse().join(''));

    return reversedWordsArray.join(' ')
}