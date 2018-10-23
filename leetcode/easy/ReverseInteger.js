/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rtn = 0;

    while( Math.abs(x)  > 0) {
        rtn *= 10;
        rtn = rtn + (x%10);
        x = parseInt(x/10) ;
        // console.log(rtn);
        // console.log(x);

        if ( (rtn < -2147483648) || (rtn > 2147483647)) {
            rtn = 0;
            break;
        }
    }

    return rtn;
};


let result = reverse(1534236469);
console.log(result);