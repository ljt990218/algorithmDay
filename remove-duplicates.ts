/**
 * @param {number[]} nums
 * @return {number}
 */

// 遍历移除法
const removeDuplicates = (nums: any) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums
}

// 双指针
const removeDuplicates2 = (nums: any) => {
    let size = nums.length
    let small = 0
    for (let max = 0; max < size; max++) {
        if (nums[small] != nums[max]) {
            small++
            nums[small] = nums[max]
        }
    }

    return nums.splice(0, small + 1)
}

console.log(removeDuplicates([0, 0, 1, 1, 2, 2, 3, 3, 4, 6, 6]))
console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 6]))
