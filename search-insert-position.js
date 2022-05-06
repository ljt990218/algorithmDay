var searchInsert = function (nums, target) {
    var index = nums.length;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            index = i;
            break;
        }
        if (nums[i] > target) {
            index = i;
            break;
        }
        if (nums[i] < target) {
            index = 0;
        }
    }
    return index;
};
var searchInsert2 = function (nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        //let mid = left + ((right - left) / 2);// 防止溢出
        var mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid; //相等返回
        }
        else if (nums[mid] < target) {
            left = mid + 1; // 目标值较大在右侧查找
        }
        else {
            right = mid - 1; // 目标值较小在左侧查找
        }
    }
    return left;
};
console.log(searchInsert([1, 3, 5, 11, 15, 56], 58));
console.log(searchInsert2([1, 3, 5, 11, 15, 56], 58));
