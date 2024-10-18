function rgbToHex (r, g, b) {
    function clump (value) {
        return Math.max(0, Math.min(255, value));
    }

    function toHex (value) {
        let hex = value.toString(16).toUpperCase();
        return hex === 1? '0' + hex : hex;
    }

    r = clump(r);
    g = clump(g);
    b = clump(b);

    return "#" + toHex(r) + toHex(g) + toHex(b);
}

console.log(rgbToHex(246, 10, 60)) // #F6A3C






