/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    let rtn = 0;
    let binaryStr = N.toString(2);
    // console.log(binaryStr);

    let distance = 0;
    for (let i=1 ; i<binaryStr.length ; i++) {
        distance++;
        if (binaryStr[i] === '1') {
            rtn = (distance > rtn) ? distance : rtn;
            distance = 0;
        }
    }

    return rtn;
};

exports.runTest = () => {
    console.log(binaryGap(8));
};
