/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    var start = 0;
    var end = nums.length - 1;
    var min = 0;
    var max = end;
    var mid;
    var result = [-1, -1];
    var flag = 0;
    var startleft;
    var endleft;
    var startright;
    var endright;
    var find_left = function (min, max) {
        var mid;
        for (mid = Math.floor((max + min) / 2); min <= max; mid = Math.floor((max + min) / 2)) {
            if (nums[mid] < target) {
                startleft = min = mid + 1;
            }
            else if (nums[mid] > target) {
                endleft = max = mid - 1;
            }
            else {
                result[0] = mid;
                if (min == max) return;
                endleft = mid - 1;
                return find_left(startleft, endleft);
            }
        }
    };
    var find_right = function (min, max) {
        var mid;
        for (mid = Math.floor((max + min) / 2); min <= max; mid = Math.floor((max + min) / 2)) {
            if (nums[mid] < target) {
                startright = min = mid + 1;
            }
            else if (nums[mid] > target) {
                endright = max = mid - 1;
            }
            else {
                result[1] = mid;
                if (min == max) return;
                startright = mid + 1;
                return find_right(startright, endright);
            }
        }
    }
    for (mid = Math.floor((max + min) / 2); min <= max; mid = Math.floor((max + min) / 2)) {
        if (nums[mid] < target) {
            start = min = mid + 1;
        }
        else if (nums[mid] > target) {
            end = max = mid - 1;
        }
        else {
            result = [mid, mid];
            flag = 1;
            break;
        }
    }

    if (flag == 0) return result;
    startleft = start;
    endleft = mid - 1;
    startright = mid + 1;
    endright = end;
    find_left(startleft, endleft);
    find_right(startright, endright);

    return result;
};
