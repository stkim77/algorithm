/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let nodeNum = [];
let nodeSum = [];
var averageOfLevels = function(root) {
    let rtn = [];
    nodeNum = [];
    nodeSum = [];
    travelTree(root, 0);
    for (let i=0 ; i<nodeNum.length ; i++) {
        rtn.push(nodeSum[i]/nodeNum[i]);
    }
    return rtn;
};

const travelTree = (node, level) => {
    if (node === null) {
        return;
    }

    if (nodeNum[level] === undefined) {
        nodeNum[level] = 0;
        nodeSum[level] = 0;
    }

    nodeSum[level] += node.val;
    nodeNum[level] += 1;
    travelTree(node.left, level+1);
    travelTree(node.right, level+1);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let tree3 = new TreeNode(-3);
let tree2 = new TreeNode(2);
let tree1 = new TreeNode(5);
tree1.left = tree2;
tree1.right = tree3;

console.log(averageOfLevels(tree1));