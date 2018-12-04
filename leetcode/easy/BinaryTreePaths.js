/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let rtn = [];
    let tree = [];
    tree.push({node:root, path:[]});

    while (tree.length > 0) {
        const { node, path } = tree.pop();
        if (node!=null) {
            let newPath = path.concat([node.val]);
            if (node.left===null && node.right===null) {
                rtn.push(newPath.join('->'));
            } else {
                if (node.left!=null) {
                    tree.push({node:node.left, path:newPath});
                }
                if (node.right!=null) {
                    tree.push({node: node.right, path:newPath});
                }
            }
        }
    }

    return rtn;
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let tree4 = new TreeNode(5);
let tree3 = new TreeNode(3);
let tree2 = new TreeNode(2);
let tree1 = new TreeNode(1);

tree2.right = tree4;
tree1.left = tree2;
tree1.right = tree3;


exports.runTest = () => {
    console.log(binaryTreePaths(tree1));
    // console.log(binaryTreePaths(null));
};
