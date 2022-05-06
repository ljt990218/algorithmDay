/**
 * @param {number[]} nums
 * @return {number}
 */
// 遍历移除法
var removeDuplicates = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
};
// 双指针
var removeDuplicates2 = function (nums) {
    var size = nums.length;
    var small = 0;
    for (var max = 0; max < size; max++) {
        if (nums[small] != nums[max]) {
            small++;
            nums[small] = nums[max];
        }
    }
    return nums.splice(0, small + 1);
};
console.log(removeDuplicates([0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 6]));
console.log(removeDuplicates2([0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 6]));
