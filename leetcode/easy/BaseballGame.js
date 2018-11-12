/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let rtn = [];

    ops.forEach((element) => {
        switch (element) {
            case "C":
                rtn.pop();
                break;
            case "D":
                let doubleScore = rtn[rtn.length-1] * 2;
                rtn.push(doubleScore);
                break;
            case "+":
                let sumScore = rtn[rtn.length-2] + rtn[rtn.length-1];
                rtn.push(sumScore);
                break;
            default:
                rtn.push(parseInt(element));
        }
    });

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return rtn.reduce(reducer);
};

// let ops = ["5","2","C","D","+"];
let ops = ["5","-2","4","C","D","9","+","+"];
console.log(calPoints(ops));