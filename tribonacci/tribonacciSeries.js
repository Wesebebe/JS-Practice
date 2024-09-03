function tribonacci(signature, n) {
    if(n === 0) {
        return [];
    }

    for(let i = 3; i < n; i++) {
        let nextTerm = signature[i - 1] + signature[i - 2] + signature[i - 3];
        signature.push(nextTerm);
    }

    return signature;

}