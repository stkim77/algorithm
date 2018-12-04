/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var findTilt = function(root) {
    let tilt = 0;

    const traverseTree = (node) => {
        let rtn = 0;
        if (node!=null) {
            let leftVal = traverseTree(node.left);
            let rightVal = traverseTree(node.right);
            rtn = node.val + leftVal + rightVal;
            tilt += Math.abs(leftVal-rightVal);
        }
        return rtn;
    };

    traverseTree(root);
    return tilt;
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// let tree3 = new TreeNode(3);
let tree2 = new TreeNode(2);
let tree1 = new TreeNode(1);

tree1.left = tree2;
// tree1.right = tree3;

exports.runTest = () => {
    console.log(findTilt(tree1));
    // console.log(findTilt(null));
};
