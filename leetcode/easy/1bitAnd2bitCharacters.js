/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let bitIndex = 0;
    while (bitIndex < (bits.length-1)) {
        bitIndex += bits[bitIndex] + 1 ;
    }

    return bitIndex === (bits.length-1);
};

let bits = [1, 1, 0];
let rtn = isOneBitCharacter(bits)
console.log(rtn);