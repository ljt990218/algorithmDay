let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 3

const rotArr = (nums: any, k: number) => {
    for (let i = 0; i < k; i++) {
        let item = nums[nums.length - 1]
        nums.pop()
        nums.unshift(item)
    }

    return nums
}

console.log(rotArr(nums, k))
