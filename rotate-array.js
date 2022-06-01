var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
var rotArr = function (nums, k) {
    for (var i = 0; i < k; i++) {
        var item = nums[nums.length - 1];
        console.log(item);
        nums.pop();
        nums.unshift(item);
    }
    return nums;
};
console.log(rotArr(nums, k));
