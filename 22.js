/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n == 0) return [""];
    var result = [];
    var root = new Node('(', null, null);
    var accessTree = function(str, curr) {
        if (curr.left == null && curr.right == null) {
            result.push(str.concat(curr.data));
            return;
        }
        if (curr.left != null) {
            accessTree(str.concat(curr.data), curr.left);
        }
        if (curr.right != null) {
            accessTree(str.concat(curr.data), curr.right);
        }
        
    }
    buildTree(root, n - 1, n);
    accessTree("", root);
    return result;
};

var buildTree = function(root, num1, num2) {
    if (num1 == num2) {
        root.left = new Node('(', null, null);
        buildTree(root.left, num1 - 1, num2);
    } else {
        if (num2 == 1) {
            root.left = new Node(')', null, null);
            return;
        }
        if (num1 > 0) {
            root.left = new Node('(', null, null);
            buildTree(root.left, num1 - 1, num2);
        }
        root.right = new Node(')', null, null);
        buildTree(root.right, num1, num2 - 1);
    }
}

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}