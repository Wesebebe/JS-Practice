function printerError(s) {
    let errors = 0;

    const correctColors = new Set("abcdefghijklm")

    for(const char of s) {
        if(!correctColors.has(char)) {
            errors += 1;
        }
    }
    return `${errors}/${s.length}`;
}