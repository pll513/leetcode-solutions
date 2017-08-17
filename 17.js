/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length == 0) return [];
    if (~digits.indexOf('0')) return [];
    var strarr = [
        "",
        "*",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz"
    ];
    var strs = [];
    var result = [];
    var root = new Node(null, null, null);

    var build_tree = function (root, strs) {
        var lastnode;
        if (strs.length == 0) return;
        lastnode = root.left = new Node(strs[0][0], null, null);
        build_tree(lastnode, copy_and_delete(strs, 0));
        for (var i = 1; i < strs[0].length; ++i) {
            lastnode = lastnode.next = new Node(strs[0][i], null, null);
            build_tree(lastnode, copy_and_delete(strs, 0));
        }
    };

    var visit_tree = function (root, str) {
        if (root == null) {
            result.push(str);
            return;
        }
        // console.log("root.data: " + root.data);
        visit_tree(root.left, str + (root.data || ''));
        if (root.next) visit_tree(root.next, str);
    };

    for (var i = 0; i < digits.length; ++i) {
        strs[i] = strarr[digits[i]];
    }

    build_tree(root, strs);
    visit_tree(root, '');

    return result;

};

function Node(data, left, next) {
    this.data = data;
    this.left = left;
    this.next = next;
}

function copy_and_delete(arr, index) {
    var newarr = Array.prototype.slice.call(arr);
    newarr.splice(index, 1);
    return newarr;
}