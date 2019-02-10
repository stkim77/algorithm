/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    let indexOfArr = A.length-1;
    let tmpValue = 0 ;
    while (K>0) {
        if (indexOfArr<0) {
            A.unshift(K%10);            
            K = parseInt(K/10);
        } else {
            tmpValue = (K%10) + A[indexOfArr];
            A[indexOfArr] = (tmpValue%10);
            indexOfArr--;
            K = parseInt(K/10);
            K += parseInt(tmpValue/10);
        }
    } 

    return A;
};

let A = [9,9,9,9,9,9,9,9,9,9];
let K = 1;

exports.runTest = () => {
    console.log(addToArrayForm(A, K));
};