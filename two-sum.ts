/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums: number[], target: number) => {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i]
        let diff = target - item
        if (map.has(diff)) {
            return [map.get(diff), i]
        }
        map.set(item, i)
    }
}

console.log(twoSum([2, 7, 11, 15], 9))
