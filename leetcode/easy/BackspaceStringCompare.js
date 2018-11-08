/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let refineS = removeBackSpaceChar(S);
    let refineT = removeBackSpaceChar(T);
    return (refineS === refineT);
};

const removeBackSpaceChar = (originStr) => {
    let rtnArr = [];
    for (let i=0 ; i<originStr.length ; i++) {
        if (originStr.charAt(i) === '#') {
            rtnArr.pop();
        } else {
            rtnArr.push(originStr.charAt(i));
        }
    }
    return rtnArr.join('');
};

let S = "a#c", T = "b";
console.log(backspaceCompare(S, T));