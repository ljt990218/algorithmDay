var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
// 临时存储最后一个 => 删除最后一个 => 添加到最前
// const rotArr = (nums: any, k: number) => {
//     for (let i = 0; i < k; i++) {
//         let item = nums[nums.length - 1]
//         nums.pop()
//         nums.unshift(item)
//     }
//     return nums
// }
// console.log(rotArr(nums, k))
// 删除前 k 个元素 => 向数组前加 k 个元素
var rotArr2 = function (nums, k) {
    console.log(nums.slice(nums.length - k, nums.length));
    console.log(nums.slice(0, nums.length - k));
    return __spreadArray(__spreadArray([], nums.slice(nums.length - k, nums.length), true), nums.slice(0, nums.length - k), true);
};
console.log(rotArr2(nums, k));
