/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (nums.length == 0) return [[]];
    var result = [];
    var accessTree = function(root, arr) {
        if (root.data != null) arr.push(root.data);
        if (root.left == null) {
            result.push(arr);
            if (root.next != null) {
                accessTree(root.next, copysplice(arr, arr.length - 1));
            } else {
                return;
            }
        } else {
            accessTree(root.left, copy(arr));
            if (root.next != null) {
                accessTree(root.next, copysplice(arr, arr.length - 1)); 
            }
        }
    };
    var root = new Node(null, null, null);
    buildTree(root, nums);
    accessTree(root, []);
    return result;
};

function buildTree(root, nums) {
    var i;
    var len;
    var used = [];
    var tmp;
    var index;
    var newnode;
    var nodeptr;
    if (nums.length == 1) {
        root.left = new Node(nums[0], null, null);
        return;
    }
    for (i = 0, len = nums.length; i < len; ++i) {
        tmp = nums[i];
        index = used.indexOf(tmp);
        if (!~index) {
            used.push(tmp);
            newnode = new Node(tmp, null, null);
            nodeptr = appendChild(root, newnode);
            buildTree(nodeptr, copysplice(nums, i));
        }
    }
};

function Node(data, left, next) {
    this.data = data;
    this.left = left;
    this.next = next;
}

function copysplice(array, index) {
    var newarray = Array.prototype.slice.call(array);
    newarray.splice(index, 1);
    return newarray;
}

function copy(array) {
    return Array.prototype.slice.call(array);
}

function appendChild(root, node) {
    if (root.left == null) {
        root.left = node;
        return root.left;
    }
    root = root.left;
    while (root.next != null) {
        root = root.next;
    }
    root.next = node;
    return root.next;
}