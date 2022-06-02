let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 3

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

// (0-k) + (k-nums.length)
const rotArr2 = (nums: any, k: number) => {
    // console.log(nums.slice(nums.length - k, nums.length))
    // console.log(nums.slice(0, nums.length - k))
    return [...nums.slice(nums.length - k, nums.length), ...nums.slice(0, nums.length - k)]
}

// console.log(rotArr2(nums, k))
