/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var item = nums[i];
        var diff = target - item;
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(item, i);
    }
};
console.log(twoSum([2, 7, 11, 15], 9));
