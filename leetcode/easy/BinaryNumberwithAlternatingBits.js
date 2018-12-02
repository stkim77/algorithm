/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let rtn = true;
    let binaryStr = n.toString(2);

    let i=0
    while (i<(binaryStr.length-1)) {
        if (!(binaryStr[i] ^ binaryStr[i+1])) {
            rtn = false;
            break;
        }
        i++
    }
    return rtn;
};

let input = 5;
exports.runTest = () => {
    console.log(hasAlternatingBits(input));
};
